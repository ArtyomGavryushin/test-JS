from flask import Flask, request, jsonify, send_from_directory
import json
import os
import logging

# Указываем путь к build React-приложения
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
BUILD_FOLDER = os.path.join(CURRENT_DIR, "build")

app = Flask(__name__, static_folder=BUILD_FOLDER, static_url_path="/")

# Настройка логирования
logging.basicConfig(level=logging.INFO)

# Файл для хранения задач
DATA_FILE = os.path.join(CURRENT_DIR, "data.json")

# Проверяем, существует ли файл, иначе создаём
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as file:
        json.dump({"tasks": []}, file)

def load_tasks():
    """Загрузка задач из JSON файла."""
    with open(DATA_FILE, "r") as file:
        return json.load(file)

def save_tasks(data):
    """Сохранение задач в JSON файл."""
    with open(DATA_FILE, "w") as file:
        json.dump(data, file)

@app.route("/tasks", methods=["GET"])
def get_tasks():
    """Получить список всех задач."""
    try:
        data = load_tasks()
        return jsonify(data)
    except Exception as e:
        logging.error(f"Ошибка при загрузке задач: {e}")
        return jsonify({"error": "Ошибка при загрузке задач"}), 500

@app.route("/tasks", methods=["POST"])
def add_task():
    """Добавить новую задачу."""
    try:
        data = load_tasks()
        new_task = request.json
        data["tasks"].append({
            "id": len(data["tasks"]) + 1,
            "text": new_task.get("text", ""),
            "done": False
        })
        save_tasks(data)
        return jsonify({"message": "Task added successfully!"}), 201
    except Exception as e:
        logging.error(f"Ошибка при добавлении задачи: {e}")
        return jsonify({"error": "Ошибка при добавлении задачи"}), 500

@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    """Обновить задачу."""
    try:
        data = load_tasks()
        for task in data["tasks"]:
            if task["id"] == task_id:
                task["text"] = request.json.get("text", task["text"])
                task["done"] = request.json.get("done", task["done"])
                save_tasks(data)
                return jsonify({"message": "Task updated successfully!"})
        return jsonify({"error": "Task not found"}), 404
    except Exception as e:
        logging.error(f"Ошибка при обновлении задачи: {e}")
        return jsonify({"error": "Ошибка при обновлении задачи"}), 500

@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    """Удалить задачу."""
    try:
        data = load_tasks()
        data["tasks"] = [task for task in data["tasks"] if task["id"] != task_id]
        save_tasks(data)
        return jsonify({"message": "Task deleted successfully!"})
    except Exception as e:
        logging.error(f"Ошибка при удалении задачи: {e}")
        return jsonify({"error": "Ошибка при удалении задачи"}), 500

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    """Служить React-приложению."""
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)

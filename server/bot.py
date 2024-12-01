from telegram import Update, KeyboardButton, ReplyKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# URL вашего MiniApp
WEB_APP_URL = "http://localhost:3000/test-JS"

# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [[
        KeyboardButton(text="Открыть MiniApp", web_app={"url": WEB_APP_URL})
    ]]
    reply_markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)

    await update.message.reply_text(
        "Нажмите на кнопку ниже, чтобы открыть MiniApp:",
        reply_markup=reply_markup
    )

# Запуск бота
if __name__ == "__main__":
    app = ApplicationBuilder().token("5738476686:AAFwtaR1n00gYBLYQYtkI4h9JhzBFVtdJSo").build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()

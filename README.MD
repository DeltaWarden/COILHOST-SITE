# COILHOST – Онлайн-магазин на React + Django

COILHOST — это современный сайт-хостинг с API на Django и интерфейсом на React. Проект включает рабочую админку, каталог серверов и полностью адаптивный интерфейс.

---

## Скриншот

![Главная страница](https://storage.yandexcloud.net/fotora.ru/uploads/66e90a73e1827413.png)

---

## Стек технологий

- Django (REST API, админка)
- React (TypeScript)
- CSS Modules
- SQLite (по умолчанию)

---

## Возможности

- Каталог услуг(сервера)
- Рабочее API для фронтенда
- Адаптивный дизайн (для ПК и мобильных)
- Django Admin для управления серверами

---

## Установка и запуск

### 1. Клонировать репозиторий
Backend
```bash
git clone https://github.com/DeltaWarden/COILHOST-SITE.git
cd COILHOST-SITE

cd COILHOSTBACKEND

python -m venv venv
# Linux/macOS
source venv/bin/activate
# Windows
venv\Scripts\activate

pip install -r requirements.txt

cd coilhost

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

---

Frontend
```bash
cd DELTACHEATS-SITE

cd COILHOST

npm install

npm run dev
```

Заказать полный сайт - TG: @deltasquare



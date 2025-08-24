FROM python:3.11-slim

RUN apt-get update \
    && apt-get install -y libpq-dev gcc \
    && apt-get purge -y --auto-remove

# Install poetry
RUN pip install poetry

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

# Copy pyproject.toml and poetry.lock from repo root into the container
COPY pyproject.toml ./ 

# Copy backend source code
COPY ./backend/ .

# Install dependencies
RUN poetry install --without dev --no-interaction --no-ansi --no-root

# Reference the app file and the app variable `file:variable`
CMD ["poetry", "run", "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

.PHONY: up down build restart pull logs ps update

up:
	docker compose up -d --build

down:
	docker compose down

build:
	docker compose build

restart:
	docker compose restart

pull:
	git pull --rebase --autostash

update:
	./deploy/update.sh

logs:
	docker compose logs -f microatlas-web

ps:
	docker compose ps

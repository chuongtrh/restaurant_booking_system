startDB:
	docker-compose -f docker-compose.yml up -d --build postgres

stopDB:
    docker-compose down

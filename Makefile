.PHONY: build dev load_schema
ENV_FILE=".env"

.stamps: Makefile
	@mkdir -p $@

# third-party/top_secret.xml:
# 	# WEB_USER and WEB_AUTH_TOKEN are variables that should contain credentials
# 	# required to obtain the file.
# 	@curl -u "$(WEB_USER):$(WEB_AUTH_TOKEN)" https://example.com/downloads/this_is_a_secret.xml -L -o $@

# webapp: .stamps/webapp.stamp
# .stamps/webapp.stamp: .stamps webapp/Dockerfile third-party/top_secret.xml $(WEBAPP_SOURCES)
# 	docker build -t example/webapp -f webapp/Dockerfile webapp
# 	@touch $@

dev: build
	@echo "dev"

build: frontend/node_modules build_docker docker_up load_schema 
	@echo "build"

load_schema: .stamps/load_schema.stamp
.stamps/load_schema.stamp: .stamps cms/schema.yaml
	docker exec cms npx directus schema apply --yes ./schema.yaml

docker_up:
	docker-compose up --abort-on-container-exit

build_docker: .stamps/build_docker.stamp
.stamps/build_docker.stamp: .stamps docker-compose.yaml
	docker-compose build --no-cache
	@touch $@

create_env: .env.example
	@if ! test -f "${ENV_FILE}"; then \
		echo "${ENV_FILE} does not exist. Creating from example..."; \
		cp .env.example ${ENV_FILE}; \
		echo "Created ${ENV_FILE} file"; \
	fi

frontend/node_modules: frontend/package.json
	@echo "frontend"
	@cd frontend; \
	yarn install

# dev: 
# test: build
# 	npm test
	
# build: node_modules
# 	npm build
	
# node_modules: package.json
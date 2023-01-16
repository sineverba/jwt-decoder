include .env

SONARSCANNER_VERSION=4.8.0

sonar:
	docker run --rm -it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_LOGIN=$(SONAR_LOGIN) \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u
	npm install
	npx browserslist@latest --update-db
	npm audit fix
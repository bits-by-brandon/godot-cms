FROM directus/directus:latest
WORKDIR /directus
COPY schema.yaml schema.yaml
ENTRYPOINT [ "directus schema apply --yes ./schema.yaml" ]
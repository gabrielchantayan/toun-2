# Toun
A homepage for your homelab
Written in React

[API Docs](https://github.com/gabrielchantayan/toun-2/blob/main/docs/api.md)

## Docker Compose
```
services:
  toun:
    image: gulaggoon/toun:latest
    container_name: toun
    volumes:
      - /path/to/config:/app/config
    environment:
      ADMIN_PASSWORD : "password"
    ports:
      - 3080:3080
    restart: unless-stopped
```
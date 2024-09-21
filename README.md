First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

DOCUMENTASI DEPLOY NEXTJS 14 APP ROUTER IN VM WITH NGINX (SSL WITH CERBOT)

(sesuaikan ip, username, password)

1. login bash
ssh username@ip (ssh user@12.12.212.123)

2. install node & npm VERSI LTS
menggunakan mvc 

3. clone project 
git clone https://Linggayahaha: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@github.com/Linggaept/SinariDesa.git

4. buka dan npm update dan npm install
5. npm run build
6. npm run start (testing)
7. install dan setup nginxx untuk reverse proxy dan portnya 
8. sudo nano /etc/nginx/conf.d/sinaridesa.conf

isi dengan ini(ganti sesuai kebutuhan)

```bash
server {
    listen 80;
    listen [::]:80;

    root /home/~/SinariDesa;
    index index.html index.htm index.nginx-debian.html;

    server_name your_domain_or_ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```


8. install pm2 dan setup (untuk background proses)

9. untuk setup ssl (menggunakan Certbot)
	- sudo apt install certbot python3-certbot-nginx
	- sudo certbot --nginx (isi sesuai arahan certbot) maka isi dari nginx akan diupdate otomatis oleh certbot

10. restart nginx dan pm2 untuk apply semua config.

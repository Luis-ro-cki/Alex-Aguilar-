<div align="center">

<!-- TITULO GIGANTE ANIMADO -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&duration=3000&pause=800&color=00F5D4&center=true&vCenter=true&multiline=true&width=800&height=120&lines=⚡+LUIS+GONZÁLEZ+HOSTING;🚀+Servidor+Activo+24%2F7;💻+Stack%3A+Node.js+%2B+Nginx+%2B+Docker" alt="Typing SVG" />

<!-- BADGES ESTILO PANEL -->
<p>
  <img src="https://img.shields.io/badge/STATUS-ONLINE-00FF88?style=for-the-badge&logo=power&logoColor=black" />
  <img src="https://img.shields.io/badge/UPTIME-99.99%25-00D9FF?style=for-the-badge&logo=cloudflare&logoColor=black" />
  <img src="https://img.shields.io/badge/SERVER-NICARAGUA-FF006E?style=for-the-badge&logo=server&logoColor=white" />
</p>

<!-- LINEA NEON -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-9080-128a92674dfa.png" />

</div>

## 👑 Team Core

<table align="center">
<tr>
<td align="center" width="50%">
<a href="https://github.com/tu-usuario">
  <img src="https://github.com/tu-usuario.png" width="150px;" alt="Luis González"/><br>
  <sub><b>🔥 Luis González</b></sub><br>
  <sub><i>DevOps & Backend Lead</i></sub>
</a>
</td>
<td align="center" width="50%">
<a href="https://github.com/sakura-chan">
  <img src="https://github.com/sakura-chan.png" width="150px;" alt="Sakura Chan"/><br>
  <sub><b>🌸 Sakura Chan</b></sub><br>
  <sub><i>Frontend & UI/UX</i></sub>
</a>
</td>
</tr>
</table>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-9080-128a92674dfa.png" />
</div>

## 📊 Arquitectura del Servidor

```mermaid
graph LR
    A[🌐 Usuario] --> B[⚡ Nginx LB]
    B --> C[🟢 Node App #1]
    B --> D[🟢 Node App #2]
    C --> E[(🗄️ PostgreSQL)]
    D --> E
    E --> F[💾 Redis Cache]
    style B fill:#00F5D4,stroke:#fff
    style C fill:#00FF88,stroke:#fff
    style D fill:#00FF88,stroke:#fff
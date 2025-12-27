
# 👟 KicksHub - Modern Sneaker Store Landing Page

**KicksHub** adalah sebuah landing page website *e-commerce* untuk toko sepatu yang dirancang dengan antarmuka modern, responsif, dan interaktif. Proyek ini dibangun untuk mendemonstrasikan implementasi layouting presisi menggunakan **Utility-First CSS**.

🚀 **Live Demo:** [Lihat Website KicksHub](https://sepatu-kita.vercel.app/)

---

## ✨ Fitur Utama

* **Responsive Design:** Tampilan yang adaptif dan rapi di semua ukuran perangkat (Mobile, Tablet, dan Desktop).
* **Modern Hero Section:** Menampilkan produk unggulan dengan efek animasi *levitation* (mengambang) dan elemen dekoratif visual.
* **Interactive Navbar:** Navigasi yang *sticky* dengan menu Dropdown pada desktop dan Hamburger Menu yang mulus pada tampilan mobile.
* **Smooth Animations:** Penggunaan transisi CSS dan transformasi elemen (hover effects) untuk pengalaman pengguna yang dinamis.
* **Clean Code Structure:** Struktur folder dan penulisan kelas Tailwind yang terorganisir.

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik halaman web.
* **Tailwind CSS (v3):** Framework CSS untuk styling yang cepat dan konsisten.
* **JavaScript (Vanilla):** Untuk logika interaktif sederhana (Mobile Menu Toggle).
* **Vercel:** Platform deployment untuk hosting website.

## 📂 Struktur Folder

```text
├── index.html          # File utama halaman
├── tailwind.config.js  # Konfigurasi kustom (Animasi, Warna, Font)
├── src/
│   ├── css/
│   │   ├── input.css   # Source CSS Tailwind
│   │   └── output.css  # Hasil compile CSS (Generated)
│   └── assets/         # Aset gambar dan ikon

```

## 💻 Cara Menjalankan di Local

Jika Anda ingin mencoba proyek ini di komputer Anda sendiri:

1. **Clone repositori ini**
```bash
git clone [https://github.com/username-anda/kickshub.git](https://github.com/username-anda/kickshub.git)
cd kickshub

```


2. **Install Tailwind CSS** (Pastikan Node.js sudah terinstall)
```bash
npm install -D tailwindcss@3
npx tailwindcss init

```


3. **Jalankan Build Process**
Perintah ini akan memantau perubahan file HTML dan mengupdate CSS secara otomatis:
```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch

```


4. **Buka Website**
Buka file `index.html` langsung di browser atau gunakan ekstensi "Live Server" di VS Code.

---

## 🎨 Preview

<img width="1897" height="980" alt="image" src="https://github.com/user-attachments/assets/22580255-2a68-4cee-9445-312b51cce5c5" />


---

Dibuat dengan ❤️ oleh **Sigiitttt**.

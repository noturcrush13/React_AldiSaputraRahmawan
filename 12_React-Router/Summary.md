Jika ingin membuat routing membutuhkan library tambahan karena tidak secara langsung tersedia. 
Ternyata ada beberapa library yang bisa digunakan, diantara library yang sangat familiar adalah react-router dan reach/router.

BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk mensingkronasi UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

Switch digunakan untuk membungkus node Route, yang mana hanya akan merender satu Route saat pathnya cocok dengan URL.

Route digunakan untuk merender UI saat path cocok dengan URL saat ini. 
Di dalam Component Route ini kita menggunakan exact, 
yang mana bertugas untuk memastikan Route hanya merender component yang memiliki path dan location.pathname yang cocok.
Jika tidak ada yang cocok, maka Route yang akan dirender yaitu Route terakhir dengan component Notfound.

React menggunakan method ReactDom.render() untuk me-render root component kita ke dalam DOM, kode tersebut terdapat di index.js. 

Parameter URL. adalah suatu parameter yang nilainya ditetapkan .secara dinamis. di URL halaman. 

Kegunaan URL Parameter adalah Paginasi, Penyortiran dan Penyaringan, Pencarian, dan Menggambarkan

useHistory memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi.
Contoh:
- length
- go
- goBack
- goForward
- Push

useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.

useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.




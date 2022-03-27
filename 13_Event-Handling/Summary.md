State adalah data private component. data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

Keuntungan menggunakan State adalah :
- Data yang bisa dimodifikasi menggunakan setState
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat Asynchronous
- Dipakai dalam class

Stateful Component adalah Component yang memiliki state. Component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle.

Stateless Component adalah component yang tidak memiliki state dan hanya menggunakan props. umumnya component ini dibuat dengan function karena codenya lebih ringkas

Handling Event adalh suatu metode untuk menangani sebuah event yang diberikan pengguna kepada suatu component.

Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu component, misal tombol ditekan.
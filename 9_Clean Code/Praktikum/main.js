// Soal no 1
// 1. penamaan class tidak menggunakan huruf kapital pada huruf depannya
// 2. variable var yang dibuat menjadi beberapa baris, lebih enak diliat apabila dijadikan 1 var saja
// 3. pada class Service kebanyakan menggunakan User sehingga terlihat boros penggunaan baris
// 4. pada class Service tidak menggunakan constructor
// 5. kesalahan pada penulisan method dan penamaan method tidak menggunakan teknik penulisan camel

// Solusi yang bisa saya berikan
class User{
    var Id,
    Username,
    Password;
}

class Service{
    constructor(User = []) {
        this.UserService = [...User];
    }
    getAllUser(){
        return this.UserService;
    }
    
    getUserById(){
        return this.filter.UserService(UserId);
    }

}

// Soal no 2

class Kendaraan {
    var TotalRoda = 0;
    var KecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    void Berjalan() {
        TambahKecepatan(10);
    }

    TambahKecepatan(var KecepatanBaru){
        KecepatanPerJam = KecepatanPerJam + KecepatanBaru;
    }
}

void main() {
    MobilCepat = mobil();
    for(i=0; i<3; i++){
        MobilCepat.Berjalan();
    }

    MobilLamban = mobil():
    MobilLamban.Berjalan();
}
var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika Ankot Kosong
if (penumpang.length == 0) {
    // Tambah Penumpang Di Array
    penumpang.push(namaPenumpang);
    // Kembalikan Isi Array & Keluar Dari Function
    return penumpang;
} else {
    }
    // Telusuri Seluruh Kursi Dari Awal
    for( var i = 0; i < penumpang.length; i++ ){
        if ( penumpang[i] == undefined) {
    // Tambah Penumpang Di Kursi Pertama
            penumpang[i] = namaPenumpang;
    // Kembalikan Isi Array & Dan Keluar Dari Penumpang
            return penumpang;
        }
    // Jika Seluruh Kursi Terisi
        else if ( i == penumpang.length - 1){
    // Tambah Penumpang Di Akhir Array 
            penumpang.push(namaPenumpang);
    // Kembalikan Isi Array & Keluar Dari Function
            return penumpang;
        }
    // Jika Sudah Ada Nama Yang Sama
        else if (penumpang[i] == namaPenumpang){
    // Tampilkan Pesan Kesalahan
            console.log(namaPenumpang + 'Nama Mu Sudah Terdaftar');
    // Kembalikan Isi Array & Keluar dari Function
            return penumpang;
        }
    }
}
var hapusPenumpang = function(namaPenumpang, penumpang){
    // Jika Angkot Kosong0
    if (penumpang.length == 0) {
    // Tampilkan Pesan Bahwa Angkot Kosong, Dan TIdak Mungkin Penumpang Turun
    console.log('Angkot Sedang Kosong');
    // Kembalikan Isi Array & Keluar Dari Function
    return penumpang;
    } else {
    // Telusuri Seluruh Kursi Dari Awal
    for ( var i =0; i < penumpang.length; i++){ 
    // Jika Nama Penumpang Sesuai
    if      ( penumpang[i] == namaPenumpang){
    // Hapus Nama Penumpang Dengan Mengubah Namanya Menjadi Undefined
            penumpang[i] = undefined;
    // Kembalikan Isi Array & Keluar Dari Function
            return penumpang;
    // Jika Tidak Ada Nama Yang Keluar 
    } else if ( i == penumpang.length - 1){
    // Tampilkan Pesan Kesalahan
            console.log(namaPenumpang = 'Tidak Ada Dia Disini');
    // Kembalikan Isi Array & Keluar Dari Function
            return penumpang;
            }
        }
    }
}
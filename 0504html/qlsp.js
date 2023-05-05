class SanPham{
    constructor(ma, ten, gia, hinh) {
        this.maSp = ma;
        this.tenSp = ten;
        this.giaSp = gia;
        this.hinhSp = hinh;

    }

    toString() = function (params) {      
        
    }
}
const SAN_PHAM_KEY = "danhSachSanPham";
class CuaHang {
    constructor(ds) {
        this.sanPhams = ds;
    }
    DocDulieu(){
        let data = localStorage.getItem(SAN_PHAM_KEY);
        if(data === null) {
            return[];
        }else {
            let objs = JSON.parse(data);
            this.sanPhams = objs;
            return objs;
        }
    }
    GhiDuLieu(){
        localStorage.setItem(SAN_PHAM_KEY, JSON.stringify(this.sanPhams));
    }

    TimTheoMaSp(macantim) {
        for(let idx in this.sanPhams){
            if(this.sanPhams[idx].maSp === maCanTim) {
                return this.sanPhams[idx];

            }
        }
        return null;
    }
        

    ThemSanPham(sanPhamThem) {
        this.DocDulieu();

        //check xem sp da co truoc do hay chua, vd dua vao maSp
        let existedProd = this.TimTheoMaSp(sanPhamThem.maSp);
        if(existedProd === null) {
        this.sanPhams.push(sanPhamThem);
        this.GhiDuLieu();
        }   
}

}
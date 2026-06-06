function xuLy() {
    // Lấy dữ liệu từ giao diện HTML
    let ten = document.getElementById("ten").value;
    let tuoi = Number(document.getElementById("tuoi").value);
    let chieuCao = Number(document.getElementById("chieuCao").value);

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let dai = Number(document.getElementById("dai").value);
    let rong = Number(document.getElementById("rong").value);

    let r = Number(document.getElementById("r").value);

    let kq = document.getElementById("kq");
    
    // Xử lý các phép tính logic
    let hoc = document.querySelector('input[name="hocLapTrinh"]:checked');
    let trangThaiHoc = hoc ? hoc.value : "Chưa chọn";

    let x = "JavaScript";
    x = ten;

    let thuong = (b === 0) ? "Không thể chia cho số 0" : (a / b);

    let soSanh = "";
    if (a > b) soSanh = "Số lớn hơn là " + a;
    else if (b > a) soSanh = "Số lớn hơn là " + b;
    else soSanh = "Hai số bằng nhau";

    // Hiển thị trực tiếp Đề bài và Đáp án
    kq.innerHTML = `
        <b>Bài 1: Xuất tên vừa nhập</b><br>
        Đáp án: ${ten}<br><br>

        <b>Bài 2: Xuất tuổi vừa nhập</b><br>
        Đáp án: ${tuoi}<br><br>

        <b>Bài 3: Xuất chiều cao vừa nhập</b><br>
        Đáp án: ${chieuCao}<br><br>

        <b>Bài 4: Kiểm tra trạng thái học tập</b><br>
        Đáp án: ${trangThaiHoc}<br><br>

        <b>Bài 5: Kiểm tra kiểu dữ liệu của biến Tên</b><br>
        Đáp án: ${typeof ten}<br><br>

        <b>Bài 6: Kiểm tra kiểu dữ liệu của số a</b><br>
        Đáp án: ${typeof a}<br><br>

        <b>Bài 7: Kiểm tra kiểu dữ liệu của giá trị true</b><br>
        Đáp án: ${typeof true}<br><br>

        <b>Bài 8: Khởi tạo biến x = "JavaScript" rồi gán lại bằng Tên</b><br>
        Đáp án: x = ${x}<br><br>

        <b>Bài 9: Tính tổng a + b</b><br>
        Đáp án: ${a + b}<br><br>

        <b>Bài 10: Tính hiệu a - b</b><br>
        Đáp án: ${a - b}<br><br>

        <b>Bài 11: Tính tích a * b</b><br>
        Đáp án: ${a * b}<br><br>

        <b>Bài 12: Tính thương a / b</b><br>
        Đáp án: ${thuong}<br><br>

        <b>Bài 13: Tính diện tích hình chữ nhật</b><br>
        Đáp án: ${dai * rong}<br><br>

        <b>Bài 14: Tính chu vi hình chữ nhật</b><br>
        Đáp án: ${(dai + rong) * 2}<br><br>

        <b>Bài 15: Tính diện tích hình tròn</b><br>
        Đáp án: ${3.14 * r * r}<br><br>

        <b>Bài 16: Đổi số a từ độ C sang độ F</b><br>
        Đáp án: ${a * 9 / 5 + 32} °F<br><br>

        <b>Bài 17: Đổi số a từ độ F sang độ C</b><br>
        Đáp án: ${((a - 32) * 5 / 9).toFixed(2)} °C<br><br>

        <b>Bài 18: Tính trung bình cộng 3 số a, b, c</b><br>
        Đáp án: ${((a + b + c) / 3).toFixed(2)}<br><br>

        <b>Bài 19: Tìm phần dư của phép chia a cho b</b><br>
        Đáp án: ${a % b}<br><br>

        <b>Bài 20: So sánh số a và số b</b><br>
        Đáp án: ${soSanh}<br>
    `;
}
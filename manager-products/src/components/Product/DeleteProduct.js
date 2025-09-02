import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {deleteProduct} from '../../services/productsServices'
function DeleteProduct(props) {
    const { item, onReload } = props;
    const deleteItem = async () => {
        const result = await deleteProduct(item.id);
        if (result) {
            onReload();
            Swal.fire({
                title: "Đã xóa thành công!",
                text: "Bạn đã xóa sản phẩm thành công!",
                icon: "success"
            });
        }
}
const handleDelete = () => {
    Swal.fire({
        title: "Bạn có chắc chắn muốn xóa không?",
        text: "Nếu bạn xóa bạn sẽ không thể khôi phục lại!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Vẫn xóa!",
        cancelButtonText: "Hủy"
    }).then((result) => {
        if (result.isConfirmed) {
            deleteItem();
        }
    });
}
return (
    <>
        <button onClick={handleDelete}>Xóa</button>
    </>
);
}

export default DeleteProduct;
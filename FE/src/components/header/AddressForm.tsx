import Button from '../button/Button';
import Search from './SearchBar';
import SelectAddressForm from './SelectAddressForm';

function AddressForm() {
    return (
        <div className="fixed z-100 w-100vw h-100vh flex justify-center items-center bg-slate-400 opacity-95  top-0 left-0 bottom-0 right-0">
            <div className="w-[480px] h-[480px] bg-white opacity-100">
                <div className="relative h-12 bg-blue-600 px-10">
                    <h2 className="absolute top-1/3">Địa chỉ đã chọn: Đà Nẵng</h2>
                    <div className="absolute right-4 top-1/3">
                        <Button title={'Đóng'} wi={'w-12 absolute right-0 top-1/3'} he={'h-8'} />
                    </div>
                </div>
                <div className="bg-blue-600 pb-4 pl-20">
                    <Search text={'Tìm nhanh tỉnh thành, quận huyện'} positonCustom={'-px-1'} />
                </div>
                <form className="flex justify-center flex-col">
                    <p className="text-center my-3">Hoặc chọn tỉnh, thành phố</p>
                    <SelectAddressForm />
                    <SelectAddressForm />
                    <SelectAddressForm />
                    <div className="flex justify-center">
                        <Button title={'Xác nhận'} wi={'w-20'} he={'h-8'} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddressForm;

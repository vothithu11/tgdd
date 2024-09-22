import { footerData } from './footer.mock';

function Footer() {
    return (
        <footer className="bg-slate-50 border-t-2">
            <ul className=" grid grid-cols-3 padding">
                {footerData.map((value) => (
                    <li className="py-2" key={value}>
                        {value}
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;

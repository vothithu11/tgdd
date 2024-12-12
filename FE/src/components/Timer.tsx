import Countdown, { CountdownRenderProps } from 'react-countdown';
const Timer = () => {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 0, 0).getTime();
    const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (!completed) {
            return (
                <div className="w-[350px] h-[40px] mx-auto py-2 rounded-[50px] bg-[#fea200] flex items-center justify-center text-white leading-6 outline-[#f2f4f7] outline outline-offset-0 outline-[5px]">
                    Chỉ còn:{' '}
                    <span className="font-semibold flex">
                        <span className="bg-white w-6 h-6 flex justify-center text-[#fea200] rounded-md mx-[5px]">
                            {hours < 10 ? `0${hours}` : hours}
                        </span>
                        :
                        <span className="bg-white w-6 h-6 flex justify-center text-[#fea200] rounded-md mx-[5px]">
                            {minutes < 10 ? `0${minutes}` : minutes}
                        </span>
                        :
                        <span className="bg-white w-6 h-6 flex justify-center text-[#fea200] rounded-md mx-[5px]">
                            {seconds < 10 ? `0${seconds}` : seconds}
                        </span>
                    </span>
                </div>
            );
        }
    };
    return <Countdown date={targetTime} renderer={renderer} />;
};
export default Timer;

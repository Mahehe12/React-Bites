export default function Card1({ title }) {
    return (
        <div
            className="flex flex-col items-center justify-center border-4 border-black m-4 px-20 py-4 w-96 h-[600px] relative overflow-hidden"
            style={{ backgroundColor: '#efb3b5' }}
        >
            {/* Decorative corner flourishes */}
            <div className="absolute top-2 left-2 text-2xl rotate-45">✿</div>
            <div className="absolute top-2 right-2 text-2xl rotate-45">✿</div>
            <div className="absolute bottom-2 left-2 text-2xl rotate-45">✿</div>
            <div className="absolute bottom-2 right-2 text-2xl rotate-45">✿</div>

            <div className="w-full h-64 relative mb-4">
                <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg shadow-lg border-2 border-black/30">
                    <img
                        className="w-full h-full object-cover"
                        src="./p3.png"
                        alt="Birthday card image"
                    />
                </div>

            </div>

            <div className="font-alex-brush text-6xl relative flex items-center gap-2">
                Happy Birthday
            </div>

            <div className="font-serif-brush text-3xl mt-2 relative">
                {title}
                <div className="absolute left-[-15px] right-[-15px] h-[2px] bg-black/20 bottom-[-2px]"></div>
            </div>

            <div className="font-serif text-l mt-4 text-center">
                I wish you all the very best
            </div>
        </div>
    );
}
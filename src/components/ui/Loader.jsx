const shimmerClass = "animate-pulse bg-neutral-200 rounded";

const Loader = () => {
    return (
        <main className="min-h-screen bg-white">
            <section className="w-full h-[300px] overflow-hidden">
                <div className={`${shimmerClass} w-full h-full`} />
            </section>
            <section className="px-4 sm:px-6 lg:px-10 py-8">
                <div className="max-w-7xl mx-auto space-y-12">
                    {[...Array(3)].map((_, idx) => (
                        <div key={idx} className="space-y-4">
                        <div className={`${shimmerClass} h-6 w-1/3 sm:w-1/4 md:w-1/5`} />
                            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                                {[...Array(5)].map((__, cardIdx) => (
                                    <div
                                        key={cardIdx}
                                        className={`${shimmerClass} w-[120px] sm:w-[160px] h-[180px] sm:h-[240px] rounded-lg shrink-0`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </main>
  );
};

export default Loader;
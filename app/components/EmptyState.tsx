const EmptyState = () => {
    return ( 
      <div 
        className="
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          h-full 
          flex 
          justify-center 
          items-center 
          bg-gray-100
        "
      >
        <div className="text-center items-center flex flex-col">
          <h3 className="mt-2 text-3xl font-semibold text-gray-900">
            피드모아에 오신것을 환영합니다
          </h3>
        </div>
      </div>
    );
  }
   
  export default EmptyState;
  
// import services from "/services.json";

const ServiceSection = () => {
  return (
    <div className='my-24'>
      <div className='text-center'>
        <h4 className='text-red-500 text-xl font-bold'>Service</h4>
        <h2 className='text-4xl font-bold my-4'>Service Our Service Area</h2>
        <p className=''>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div>
        {/* {services.map((service) => (
          <div key={service._id}>
            <img src='' alt='' />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ServiceSection;

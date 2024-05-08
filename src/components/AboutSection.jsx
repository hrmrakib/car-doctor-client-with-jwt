const person = "https://i.ibb.co/7p5xnW8/person.jpg";
const parts = "https://i.ibb.co/mTpjD88/parts.jpg";

const AboutSection = () => {
  return (
    <div className='my-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
      <div className='relative'>
        <img className='w-4/5 h-96 rounded-lg' src={person} alt='' />
        <img
          className='absolute border-[8px] rounded border-white w-60 bottom-0 right-0'
          src={parts}
          alt=''
        />
      </div>
      <div>
        <h4 className='text-red-500 text-xl font-bold'>About Us </h4>
        <h2 className='text-4xl font-bold max-w-80 my-4'>
          We are qualified & of experience in this field
        </h2>
        <p className='mb-4'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button>Get More Info</button>
      </div>
    </div>
  );
};

export default AboutSection;

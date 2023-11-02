const Banner = () => {
  return (
    <article>
      <h3 className="text-[46px]">
        <span className="block">Hello, Im</span>
        <span className="block">Jessica Japeth.</span>
      </h3>
      <div className=" text-portfolio-100 my-4">
        <p className=" leading-8 text-sm">
          Im a <span className="text-white">software engineer</span>. I create{' '}
          <span className="text-white">interactive</span> web
        </p>
        <p className=" leading-8 text-sm">
          experiences using frontend technology. I am interested in{' '}
          <span className="text-white">user experience</span>,
        </p>
        <p className=" leading-8 text-sm">
          accessibility, design systems, gaming, web3 and web animations.
        </p>
      </div>
    </article>
  );
};

export default Banner;

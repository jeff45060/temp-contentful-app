import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-title'>
        <h1>Contentful CMS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          officia porro. Corrupti magnam facilis repudiandae saepe libero totam
          sed perspiciatis! In a, nihil animi commodi modi eum?
        </p>
      </div>
      <div className='img-container'>
        <img src={heroImg} alt='hero image' className='img' />
      </div>
    </section>
  )
}
export default Hero

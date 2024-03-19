import headPhone  from '../assets/headphones.jpg'

function Card() {
  return (
    <div className='border p-4 rounded shadow-2xl max-w-[500px] w-[80%]'>
      <div className='relative h-60 mb-4'>
        <img className='absolute w-full h-full object-cover rounded' src={headPhone} alt="/" />
      </div>
      <div>
        <p className='font-semibold'>Apple Headphones</p>
        <p className='text-sm pb-2'>Price: $329</p>
        <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus earum iusto error assumenda totam perferendis nihil, ad placeat eius.</p>
      </div>
    </div>
  )
}

export default Card
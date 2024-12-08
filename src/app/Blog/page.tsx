import Image from 'next/image'; 
import rec from '@/app/Blog/images/Rectangle 68.png';
import rectangle from '@/app/Blog/images/Rectangle 68 (1).png';
import rec2 from '@/app/Blog/images/Rectangle 2.png';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Blog</h1>

        <div className="flex flex-wrap items-center justify-center max-w-6xl gap-6">
          {/* Blog Post 1 */}
          <a
            href="#"
            className="w-full sm:w-[48%] lg:w-[30%] p-4 border rounded-lg hover:shadow-lg transition"
          >
            <Image
              src={rec}
              alt="Blog post 1"
              width={500}
              height={500}
              className="rounded-md w-full"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Going all-in with millennial design
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </a>

          {/* Blog Post 2 */}
          <a
            href="#"
            className="w-full sm:w-[48%] lg:w-[30%] p-4 border rounded-lg hover:shadow-lg transition"
          >
            <Image
              src={rectangle}
              alt="Blog post 2"
              width={500}
              height={500}
              className="rounded-md w-full"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Exploring new ways of decorating
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </a>

          {/* Blog Post 3 */}
          <a
            href="#"
            className="w-full sm:w-[48%] lg:w-[30%] p-4 border rounded-lg hover:shadow-lg transition"
          >
            <Image
              src={rec2}
              alt="Blog post 3"
              width={500}
              height={500}
              className="rounded-md w-full"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Handmade pieces that took time to craft
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <p>
            <strong>High Quality</strong> <br />
            Crafted from top materials
          </p>
        </div>
        <div>
          <p>
            <strong>Warranty Protection</strong> <br />
            Over 2 years
          </p>
        </div>
        <div>
          <p>
            <strong>Free Shipping</strong> <br />
            Order over $150
          </p>
        </div>
        <div>
          <p>
            <strong>24/7 Support</strong> <br />
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

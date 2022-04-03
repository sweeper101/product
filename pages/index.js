export default function Home() {
  return (
    <div>
      <section class="bg-gray-50 relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full
      h-full opacity-25 sm:opacity-100"
          width="1440"
          height="567"
          preserveAspectRatio="none"
          viewBox="0 0 1440 567"
        >
          <g mask='url("#SvgjsMask1071")' fill="none">
            <rect
              width="1440"
              height="567"
              x="0"
              y="0"
              fill="rgba(237, 237, 237, 0.92)"
            ></rect>
            <path
              d="M0,389.895C75.279,382.745,154.753,380.341,215.425,335.208C274.533,291.239,294.493,215.477,324.759,148.313C354.864,81.507,397.768,16.696,391.868,-56.342C385.823,-131.18,335.855,-192.124,292.32,-253.296C244.517,-320.465,203.283,-400.53,126.167,-429.684C47.506,-459.422,-40.144,-435.104,-120.162,-409.236C-198.531,-383.901,-286.18,-354.841,-326.863,-283.228C-366.584,-213.309,-312.427,-126.132,-326.021,-46.875C-340.21,35.849,-423.334,103.634,-407.348,186.03C-390.952,270.541,-320.419,340.264,-243.435,378.792C-169.293,415.898,-82.538,397.735,0,389.895"
              fill="rgba(225, 225, 225, 0.92)"
            ></path>
            <path
              d="M1440 1041.633C1527.899 1043.001 1577.159 939.404 1639.487 877.408 1689.0430000000001 828.116 1727.066 773.694 1767.027 716.348 1816.5430000000001 645.289 1915.988 586.049 1902.086 500.562 1888.117 414.661 1770.276 395.027 1705.35 337.073 1650.882 288.454 1616.094 221.425 1551.416 187.553 1477.277 148.72699999999998 1394.292 115.83600000000001 1312.001 131.07600000000002 1226.628 146.88600000000002 1140.629 195.272 1098.8229999999999 271.369 1058.415 344.921 1115.595 435.68399999999997 1099.417 518.031 1081.849 607.453 966.773 683.006 1001.39 767.306 1035.556 850.509 1168.2069999999999 823.563 1244.465 871.258 1319.275 918.047 1351.774 1040.259 1440 1041.633"
              fill="rgba(249, 249, 249, 0.92)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1071">
              <rect width="1440" height="567" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>

        <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex ">
          <div class="max-w-xl mx-auto text-center  ">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              NFT Marketplace
              <strong class="font-extrabold text-red-700 sm:block">
                Collect, Exchange and own from the brands you like
              </strong>
            </h1>

            <p class="mt-4 sm:leading-relaxed sm:text-xl">
              Ownership has never been more important
              <br /> Get your items verified
            </p>

            <div class="flex flex-wrap justify-center gap-4 mt-8">
              <a
                class="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                class="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="max-w-xl mx-auto text-center rounded-lg">
            <img
              src="undraw_Shopping_re_hdd9.png"
              alt=""
              class="object-cover  rounded-t-lg  shadow-xl"
            />

            <blockquote class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p class="text-lg font-bold text-gray-700">Ape crystal #1</p>
              <p class="mt-1 text-xs font-medium text-gray-500">
                Digital Marketing at Studio
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div class="max-w-xl mx-auto text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Meet The Team
            </h2>

            <p class="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
              The NFT marketplace where you can really own the brands you love
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 ">
            <div>
              <img
                src="IMG_1668.jpeg"
                alt=""
                class="group-hover:scale-105 transition-transform duration-500 object-cover w-[350px] h-[350px] sm:h-[350px]  rounded-full"
              />

              <blockquote class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
                <p class="text-lg font-bold text-gray-700">Clive Tsungu</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  CTO and Founder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>
              </blockquote>
            </div>

            <div>
              <img
                src="IMG_2648.jpg"
                alt=""
                class="group-hover:scale-105 transition-transform duration-500 object-cover w-[350px] h-[350px] sm:h-[350px]  rounded-full"
              />

              <blockquote class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
                <p class="text-lg font-bold text-gray-700">Cliff</p>
                <p class="mt-1 text-xs font-medium text-gray-500">Web Dev</p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>
              </blockquote>
            </div>

            <div>
              <img
                src="IMG_1672.jpeg"
                alt=""
                class="group-hover:scale-105 transition-transform duration-500 object-cover w-[350px] h-[350px] sm:h-[350px]  rounded-full"
              />

              <blockquote class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
                <p class="text-lg font-bold text-gray-700">Ben</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Full Stack Developer
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <aside class="p-12 bg-gray-100 sm:p-16 lg:p-24">
        <div class="max-w-xl mx-auto text-center">
          <p class="text-sm font-medium text-gray-500">Own whats yours</p>

          <p class="mt-2 text-3xl font-bold sm:text-5xl">
            Connect with your favourite brands
          </p>

          <div class="mt-8 sm:items-center sm:justify-center sm:flex">
            <a
              href=""
              class="block px-5 py-3 font-medium text-white bg-red-500 rounded-lg shadow-xl hover:bg-blue-600"
            >
              Explore Marketplace
            </a>

            <a
              href=""
              class="block px-5 py-3 mt-4 font-medium text-red-500 rounded-lg hover:text-blue-600 sm:mt-0"
            >
              Create
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

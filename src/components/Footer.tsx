/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer: React.FC = () => {
  return (
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://brandfactory.company/" className="flex items-center">
                  <img src="data:image/png;base64,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" className="h-8 mr-3" alt="FlowBite Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Brand Factory</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>
  )
}

export default Footer;
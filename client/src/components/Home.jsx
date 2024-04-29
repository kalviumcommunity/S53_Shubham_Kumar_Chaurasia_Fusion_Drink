import { Link } from "react-router-dom"
import "../App.css"

function Home() {
  return (
    <>
      <div className="homebody">
        <nav className="homenavbar">
          <div className="navbar-brand">
            <Link to="/home">
              <div id="logo">
                <svg width="200" height="auto" viewBox="0 0 1018 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M575.443 55C575.866 55.9492 576.74 57.1697 577.988 58.4147C579.757 60.1825 582.174 62.0446 584.719 63.6611C587.264 65.2824 589.927 66.668 592.148 67.513C593.258 67.9257 594.271 68.2107 595.066 68.3286C595.401 68.3778 595.695 68.3974 595.941 68.3876C593.76 65.0662 590.399 61.8667 586.655 59.4327C582.99 57.0498 578.981 55.4137 575.443 55ZM573.664 55.4058C569.567 58.174 568.162 62.9044 567.228 67.5916C568.024 69.2916 570.707 72.1413 574.234 74.6765C577.831 77.2609 582.282 79.5996 586.37 80.6019C589.76 79.7372 591.883 78.0077 593.376 75.8754C594.595 74.1459 595.381 72.1413 596 70.1662C595.617 70.176 595.214 70.1367 594.801 70.0777C593.819 69.9402 592.718 69.6159 591.519 69.1639C589.298 68.3188 586.783 67.0217 584.316 65.4986L579.157 70.2251L581.555 63.6611C579.757 62.3787 578.096 61.0197 576.74 59.6646C575.296 58.227 574.156 56.8248 573.664 55.4058ZM568.427 72.1118L555.084 87.9816L555.062 88.0111C555.013 88.0602 555 88.07 555 88.1781C555 88.2862 555.028 88.4926 555.142 88.7677C555.373 89.318 555.921 90.1041 556.7 90.9492C556.756 91.0081 556.816 91.0769 556.875 91.1359L559.529 88.8856L557.629 91.8925C559.153 93.3665 561.185 94.9682 563.327 96.3832C565.4 97.7589 567.592 98.9676 569.478 99.7537L573.193 92.7474L572.004 100.569C572.593 100.697 573.104 100.736 573.468 100.707C574.057 100.648 574.215 100.53 574.342 100.206L574.352 100.186L582.921 81.388C582.096 81.0834 581.26 80.7395 580.435 80.3562L577.752 82.9701L578.912 79.6192C576.887 78.5776 574.952 77.369 573.203 76.1112C571.365 74.7945 569.734 73.4384 568.427 72.1118Z" fill="#F3B9BE" />
                  <g filter="url(#filter0_d_2014_3)">
                    <rect x="4" width="291" height="291" rx="92" fill="url(#paint0_linear_2014_3)" />
                  </g>
                  <path d="M364.574 183V107.364H414.653V120.548H380.565V138.571H411.33V151.756H380.565V183H364.574ZM457.938 158.847V126.273H473.67V183H458.565V172.696H457.974C456.694 176.02 454.564 178.691 451.585 180.71C448.631 182.729 445.024 183.739 440.764 183.739C436.973 183.739 433.636 182.877 430.756 181.153C427.875 179.43 425.622 176.98 423.997 173.804C422.397 170.628 421.584 166.824 421.56 162.392V126.273H437.293V159.585C437.317 162.934 438.216 165.58 439.989 167.526C441.761 169.471 444.137 170.443 447.116 170.443C449.012 170.443 450.785 170.012 452.435 169.151C454.084 168.264 455.414 166.959 456.423 165.236C457.457 163.512 457.962 161.383 457.938 158.847ZM533.454 142.449L519.05 143.335C518.804 142.104 518.275 140.996 517.462 140.011C516.65 139.002 515.579 138.202 514.249 137.611C512.944 136.995 511.381 136.688 509.559 136.688C507.121 136.688 505.066 137.205 503.391 138.239C501.717 139.248 500.88 140.602 500.88 142.301C500.88 143.655 501.422 144.8 502.505 145.736C503.588 146.671 505.447 147.422 508.082 147.989L518.349 150.057C523.864 151.189 527.976 153.011 530.684 155.523C533.392 158.034 534.746 161.333 534.746 165.42C534.746 169.138 533.651 172.401 531.46 175.207C529.293 178.014 526.314 180.205 522.522 181.781C518.755 183.332 514.409 184.108 509.485 184.108C501.976 184.108 495.993 182.545 491.536 179.418C487.104 176.266 484.507 171.982 483.744 166.565L499.218 165.753C499.686 168.043 500.818 169.791 502.616 170.997C504.413 172.179 506.715 172.77 509.522 172.77C512.28 172.77 514.496 172.241 516.17 171.182C517.869 170.098 518.73 168.707 518.755 167.009C518.73 165.58 518.127 164.411 516.945 163.5C515.763 162.564 513.942 161.85 511.479 161.358L501.656 159.401C496.116 158.293 491.992 156.372 489.283 153.639C486.6 150.906 485.258 147.422 485.258 143.188C485.258 139.544 486.243 136.404 488.212 133.77C490.207 131.135 493.001 129.104 496.596 127.676C500.215 126.248 504.45 125.534 509.3 125.534C516.465 125.534 522.103 127.048 526.215 130.077C530.352 133.105 532.764 137.229 533.454 142.449ZM618.425 184.108C612.688 184.108 607.727 182.889 603.541 180.452C599.38 177.99 596.167 174.567 593.902 170.185C591.637 165.777 590.504 160.669 590.504 154.858C590.504 148.998 591.637 143.877 593.902 139.494C596.167 135.087 599.38 131.665 603.541 129.227C607.727 126.765 612.688 125.534 618.425 125.534C624.161 125.534 629.11 126.765 633.271 129.227C637.457 131.665 640.682 135.087 642.947 139.494C645.213 143.877 646.345 148.998 646.345 154.858C646.345 160.669 645.213 165.777 642.947 170.185C640.682 174.567 637.457 177.99 633.271 180.452C629.11 182.889 624.161 184.108 618.425 184.108ZM618.499 171.92C621.108 171.92 623.287 171.182 625.036 169.705C626.784 168.203 628.101 166.159 628.987 163.574C629.898 160.989 630.354 158.046 630.354 154.747C630.354 151.448 629.898 148.506 628.987 145.92C628.101 143.335 626.784 141.292 625.036 139.79C623.287 138.288 621.108 137.537 618.499 137.537C615.864 137.537 613.648 138.288 611.851 139.79C610.078 141.292 608.736 143.335 607.825 145.92C606.939 148.506 606.496 151.448 606.496 154.747C606.496 158.046 606.939 160.989 607.825 163.574C608.736 166.159 610.078 168.203 611.851 169.705C613.648 171.182 615.864 171.92 618.499 171.92ZM672.308 150.205V183H656.575V126.273H671.57V136.281H672.234C673.49 132.982 675.595 130.372 678.55 128.452C681.504 126.507 685.087 125.534 689.297 125.534C693.236 125.534 696.671 126.396 699.601 128.119C702.531 129.843 704.808 132.305 706.433 135.506C708.058 138.682 708.871 142.473 708.871 146.881V183H693.138V149.688C693.162 146.216 692.276 143.508 690.479 141.562C688.681 139.593 686.207 138.608 683.055 138.608C680.938 138.608 679.067 139.063 677.442 139.974C675.841 140.885 674.586 142.215 673.675 143.963C672.788 145.687 672.333 147.767 672.308 150.205ZM772.449 183H745.636V107.364H772.67C780.278 107.364 786.828 108.878 792.318 111.906C797.809 114.91 802.031 119.231 804.986 124.869C807.965 130.508 809.455 137.254 809.455 145.108C809.455 152.987 807.965 159.758 804.986 165.42C802.031 171.083 797.784 175.429 792.244 178.457C786.729 181.486 780.131 183 772.449 183ZM761.628 169.298H771.784C776.511 169.298 780.488 168.461 783.713 166.787C786.963 165.088 789.401 162.466 791.026 158.92C792.675 155.35 793.5 150.746 793.5 145.108C793.5 139.519 792.675 134.952 791.026 131.406C789.401 127.861 786.975 125.251 783.75 123.577C780.525 121.902 776.548 121.065 771.821 121.065H761.628V169.298ZM821.005 183V126.273H836.258V136.17H836.849C837.883 132.65 839.619 129.991 842.056 128.193C844.494 126.371 847.3 125.46 850.477 125.46C851.264 125.46 852.114 125.509 853.025 125.608C853.936 125.706 854.736 125.842 855.425 126.014V139.974C854.687 139.753 853.665 139.556 852.36 139.384C851.055 139.211 849.861 139.125 848.778 139.125C846.463 139.125 844.395 139.63 842.573 140.639C840.776 141.624 839.348 143.003 838.289 144.776C837.255 146.548 836.738 148.592 836.738 150.906V183H821.005ZM863.56 183V126.273H879.293V183H863.56ZM871.463 118.96C869.124 118.96 867.117 118.185 865.443 116.634C863.794 115.058 862.969 113.174 862.969 110.983C862.969 108.816 863.794 106.957 865.443 105.406C867.117 103.83 869.124 103.043 871.463 103.043C873.802 103.043 875.796 103.83 877.446 105.406C879.12 106.957 879.957 108.816 879.957 110.983C879.957 113.174 879.12 115.058 877.446 116.634C875.796 118.185 873.802 118.96 871.463 118.96ZM907.629 150.205V183H891.896V126.273H906.89V136.281H907.555C908.81 132.982 910.915 130.372 913.87 128.452C916.825 126.507 920.407 125.534 924.617 125.534C928.557 125.534 931.991 126.396 934.921 128.119C937.851 129.843 940.129 132.305 941.754 135.506C943.379 138.682 944.191 142.473 944.191 146.881V183H928.458V149.688C928.483 146.216 927.596 143.508 925.799 141.562C924.002 139.593 921.527 138.608 918.376 138.608C916.258 138.608 914.387 139.063 912.762 139.974C911.162 140.885 909.906 142.215 908.995 143.963C908.109 145.687 907.653 147.767 907.629 150.205ZM970.847 166.676L970.884 147.804H973.173L991.344 126.273H1009.4L984.991 154.784H981.261L970.847 166.676ZM956.591 183V107.364H972.324V183H956.591ZM992.045 183L975.352 158.293L985.841 147.176L1010.47 183H992.045Z" fill="#F3B9BE" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M98.1648 57.6255C99.0739 55.2216 100.853 53.2469 103.149 52.0925C105.445 50.938 108.091 50.6882 110.563 51.3923L159.786 65.417C162.26 66.1227 164.379 67.7332 165.721 69.9287C167.063 72.1242 167.531 74.7441 167.03 77.2682L152.732 149.77C150.801 159.556 145.457 168.338 137.654 174.551C129.851 180.764 120.095 184.006 110.125 183.697L100.94 215.915L111.055 218.8C113.671 219.545 115.883 221.298 117.206 223.674C118.529 226.051 118.853 228.855 118.108 231.471C117.363 234.087 115.61 236.299 113.233 237.622C110.857 238.945 108.052 239.269 105.437 238.524L85.9308 232.947C85.6076 232.872 85.2883 232.78 84.974 232.674L65.4406 227.11C62.825 226.364 60.6131 224.608 59.2916 222.231C57.9702 219.853 57.6473 217.048 58.3941 214.432C59.1409 211.817 60.8962 209.605 63.2739 208.283C65.6515 206.962 68.4567 206.639 71.0724 207.386L81.2149 210.284L90.4007 178.065C81.7675 173.071 75.1875 165.175 71.8331 155.782C68.4786 146.39 68.5675 136.111 72.0839 126.778L98.1648 57.6255ZM98.1648 96.1402L145.091 109.897L151.72 79.3739L109.589 66.4766L98.1648 96.1402ZM191.034 184.681C180.095 184.681 169.585 180.426 161.727 172.816C165.48 166.758 168.106 160.071 169.477 153.078L179.018 104.702L203.738 98.2898L194.765 69.0561L183.103 72.4953C184.822 64.757 183.533 61.3178 177.159 56.8463L194.765 52.4312C197.261 51.8026 199.901 52.1354 202.163 53.3635C204.424 54.5917 206.141 56.6254 206.972 59.0608L230.838 129.006C234.056 138.443 233.821 148.716 230.174 157.995C226.526 167.274 219.704 174.958 210.922 179.678L219.069 212.17L229.253 209.614C231.89 208.952 234.682 209.365 237.015 210.762C239.348 212.16 241.03 214.426 241.692 217.064C242.353 219.701 241.94 222.493 240.543 224.826C239.146 227.159 236.88 228.841 234.242 229.503L214.517 234.451C214.252 234.531 213.983 234.599 213.711 234.656L193.904 239.631C191.267 240.293 188.475 239.88 186.142 238.483C183.809 237.086 182.127 234.819 181.465 232.182C180.804 229.544 181.217 226.752 182.614 224.419C184.011 222.087 186.277 220.404 188.915 219.743L199.18 217.159L191.034 184.681Z" fill="black" />
                  <path d="M569.519 108.715L556.062 108.715C555.43 108.715 554.825 108.965 554.379 109.412C553.932 109.858 553.681 110.464 553.681 111.095C553.681 111.726 553.932 112.332 554.379 112.778C554.825 113.224 555.43 113.475 556.062 113.475L556.682 113.473L553.782 133.775L547.354 143.42C547.094 143.811 546.954 144.269 546.953 144.739L546.948 179.783C546.948 181.676 547.7 183.491 549.039 184.829C550.377 186.167 552.192 186.919 554.085 186.919L571.496 186.919C573.388 186.919 575.204 186.167 576.542 184.829C577.88 183.491 578.632 181.676 578.632 179.783L578.634 144.745C578.634 144.276 578.494 143.817 578.233 143.427L571.805 133.781L568.905 113.479L569.525 113.482C569.838 113.482 570.148 113.42 570.436 113.3C570.725 113.181 570.988 113.005 571.209 112.784C571.43 112.563 571.605 112.301 571.725 112.012C571.844 111.723 571.906 111.414 571.906 111.101C571.906 110.789 571.844 110.479 571.725 110.19C571.605 109.902 571.43 109.639 571.209 109.418C570.988 109.197 570.725 109.022 570.436 108.902C570.148 108.783 569.838 108.721 569.525 108.721L569.519 108.715ZM573.172 181.459C572.951 181.68 572.69 181.855 572.401 181.975C572.113 182.094 571.804 182.155 571.491 182.155L554.089 182.155C553.459 182.154 552.854 181.904 552.408 181.458C551.962 181.012 551.711 180.407 551.711 179.776L551.711 177.396L573.87 177.396L573.863 179.783C573.863 180.411 573.614 181.013 573.172 181.459ZM567.164 134.982C567.214 135.334 567.343 135.669 567.54 135.964L573.87 145.46L573.87 149.089L551.711 149.089V145.46L558.04 135.964C558.238 135.669 558.367 135.334 558.417 134.982L561.489 113.473L564.092 113.473L567.164 134.982Z" fill="#F3B9BE" />
                  <defs>
                    <filter id="filter0_d_2014_3" x="0" y="0" width="299" height="299" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2014_3" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2014_3" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_2014_3" x1="4" y1="291" x2="295" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFB7B7" />
                      <stop offset="1" stop-color="#7BC8FF" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </Link>
          </div>
          <div className="login">
            <Link to="/login"><button class="button-64" role="button"><span class="text">LOGIN</span></button></Link>
          </div>
        </nav>
        <div className="homeContainer">
          <h1>The best TASTE <br /> come after MIXING</h1>
          <h4>Turn your home into a cocktail lounge with our easy-to-follow <br /> recipes for cocktail perfection.</h4>
        </div>
      </div>
    </>
  )
}

export default Home

// BG IMAGE LINK
// https://media.istockphoto.com/id/1357420132/photo/mans-hand-support-flying-glass-of-cocktail-drink-with-splash-on-dark-blue-background-gravity.jpg?s=612x612&w=0&k=20&c=DYpj6W5JZZ6eBsNqNFKogLX1MW7GwtNbujJRCTXlY9k=
// BG IMAGE of Login Page
// https://media.istockphoto.com/id/534739445/photo/pouring-martini.jpg?s=612x612&w=0&k=20&c=aKQOxHkyJ05Wmdr-mmxaQ17p1Yf0UmUlWvLVbfwgvMI=
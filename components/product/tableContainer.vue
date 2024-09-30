<template>
    <div>
        <div
          id="trigger"
          class="container d-flex align-items-center justify-content-center"
          style="margin-top: 65px"
        >
          <div class="product-details p-3">
            <div class="tabs">
              <div class="header">
                <div
                  @click="(tabActive = 1), (tab = 0)"
                  :class="{ active: tabActive == 1 }"
                  class="d-flex icon align-items-center gap-2"
                >
                  <div class="mb-2 d-flex align-items-center gap-2">
                    <div class="circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.2727 0H2.72727C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00396
     0 2.72727V17.2727C0 17.996 0.287337 18.6897 0.7988 19.2012C1.31026 19.7127 2.00396 20 2.72727
      20H17.2727C17.996 20 18.6897 19.7127 19.2012 19.2012C19.7127 18.6897 20 17.996 20 17.2727V2.72727C20 2.00396 19.7127 1.31026 19.2012 0.7988C18.6897 
      0.287337 17.996 0 17.2727 0ZM5.45455 15.4545H4.54545C4.30435 15.4545 4.07312 15.3588 3.90263 15.1883C3.73214 15.0178 3.63636 14.7866 3.63636 
      14.5455C3.63636 14.3043 3.73214 14.0731 3.90263 13.9026C4.07312 13.7321 4.30435 13.6364 4.54545 13.6364H5.45455C5.69565 13.6364 5.92688 13.7321 
      6.09737 13.9026C6.26786 14.0731 6.36364 14.3043 6.36364 14.5455C6.36364 14.7866 6.26786 15.0178 6.09737 15.1883C5.92688 15.3588 5.69565 15.4545
       5.45455 15.4545ZM5.45455 10.9091H4.54545C4.30435 10.9091 4.07312 10.8133 3.90263 10.6428C3.73214 10.4723 3.63636 10.2411 3.63636 10C3.63636 9.75889 3.73214 9.52766 3.90263 9.35718C4.07312 9.18669 4.30435 9.09091 4.54545 9.09091H5.45455C5.69565 9.09091 5.92688 9.18669 6.09737 9.35718C6.26786 9.52766 6.36364 9.75889 6.36364 10C6.36364 10.2411 6.26786 10.4723 6.09737 10.6428C5.92688 10.8133 5.69565 10.9091 5.45455 10.9091ZM5.45455 6.36364H4.54545C4.30435 6.36364 4.07312 6.26786 3.90263 6.09737C3.73214 5.92688 3.63636 5.69565 3.63636 5.45455C3.63636 5.21344 3.73214 4.98221 3.90263 4.81172C4.07312 4.64123 4.30435 4.54545 4.54545 4.54545H5.45455C5.69565 4.54545 5.92688 4.64123 6.09737 4.81172C6.26786 4.98221 6.36364 5.21344 6.36364 5.45455C6.36364 5.69565 6.26786 5.92688 6.09737 6.09737C5.92688 6.26786 5.69565 6.36364 5.45455 6.36364ZM15.4545 15.4545H9.09091C8.8498 15.4545 8.61857 15.3588 8.44808 15.1883C8.2776 15.0178 8.18182 14.7866 8.18182 14.5455C8.18182 14.3043 8.2776 14.0731 8.44808 13.9026C8.61857 13.7321 8.8498 13.6364 9.09091 13.6364H15.4545C15.6957 13.6364 15.9269 13.7321
        16.0974 13.9026C16.2679 14.0731 16.3636 14.3043 16.3636 14.5455C16.3636 14.7866 16.2679 15.0178 16.0974 15.1883C15.9269 15.3588 15.6957 15.4545 15.4545 15.4545ZM15.4545 10.9091H9.09091C8.8498 10.9091 8.61857 10.8133 8.44808 10.6428C8.2776 10.4723 8.18182 10.2411 8.18182 10C8.18182 9.75889 8.2776 9.52766 8.44808 9.35718C8.61857 9.18669 8.8498 9.09091 9.09091 9.09091H15.4545C15.6957 9.09091 15.9269 9.18669 16.0974 9.35718C16.2679 9.52766 16.3636 9.75889 16.3636 10C16.3636 10.2411 16.2679 10.4723 16.0974 10.6428C15.9269 10.8133 15.6957 10.9091 15.4545 10.9091ZM15.4545 6.36364H9.09091C8.8498 6.36364 8.61857 6.26786 8.44808 6.09737C8.2776 5.92688 8.18182 5.69565 8.18182 5.45455C8.18182 5.21344 8.2776 4.98221 8.44808 4.81172C8.61857 4.64123 8.8498 4.54545 9.09091 4.54545H15.4545C15.6957 4.54545 15.9269 4.64123 16.0974 4.81172C16.2679 4.98221 16.3636 5.21344 16.3636 5.45455C16.3636 5.69565 16.2679 5.92688 16.0974 6.09737C15.9269 6.26786 15.6957 6.36364 15.4545 6.36364Z"
                        />
                      </svg>
                    </div>
                    <span style="letter-spacing: 0px"> {{ $t("sizes") }} </span>
                  </div>
                </div>
                <div
                  @click="(tabActive = 2), (tab = 1)"
                  :class="{ active: tabActive == 2 }"
                  class="d-flex icon align-items-center gap-2"
                >
                  <div class="mb-2 d-flex align-items-center gap-2">
                    <div class="circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.2727 0H2.72727C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00396
     0 2.72727V17.2727C0 17.996 0.287337 18.6897 0.7988 19.2012C1.31026 19.7127 2.00396 20 2.72727
      20H17.2727C17.996 20 18.6897 19.7127 19.2012 19.2012C19.7127 18.6897 20 17.996 20 17.2727V2.72727C20 2.00396 19.7127 1.31026 19.2012 0.7988C18.6897 
      0.287337 17.996 0 17.2727 0ZM5.45455 15.4545H4.54545C4.30435 15.4545 4.07312 15.3588 3.90263 15.1883C3.73214 15.0178 3.63636 14.7866 3.63636 
      14.5455C3.63636 14.3043 3.73214 14.0731 3.90263 13.9026C4.07312 13.7321 4.30435 13.6364 4.54545 13.6364H5.45455C5.69565 13.6364 5.92688 13.7321 
      6.09737 13.9026C6.26786 14.0731 6.36364 14.3043 6.36364 14.5455C6.36364 14.7866 6.26786 15.0178 6.09737 15.1883C5.92688 15.3588 5.69565 15.4545
       5.45455 15.4545ZM5.45455 10.9091H4.54545C4.30435 10.9091 4.07312 10.8133 3.90263 10.6428C3.73214 10.4723 3.63636 10.2411 3.63636 10C3.63636 9.75889 3.73214 9.52766 3.90263 9.35718C4.07312 9.18669 4.30435 9.09091 4.54545 9.09091H5.45455C5.69565 9.09091 5.92688 9.18669 6.09737 9.35718C6.26786 9.52766 6.36364 9.75889 6.36364 10C6.36364 10.2411 6.26786 10.4723 6.09737 10.6428C5.92688 10.8133 5.69565 10.9091 5.45455 10.9091ZM5.45455 6.36364H4.54545C4.30435 6.36364 4.07312 6.26786 3.90263 6.09737C3.73214 5.92688 3.63636 5.69565 3.63636 5.45455C3.63636 5.21344 3.73214 4.98221 3.90263 4.81172C4.07312 4.64123 4.30435 4.54545 4.54545 4.54545H5.45455C5.69565 4.54545 5.92688 4.64123 6.09737 4.81172C6.26786 4.98221 6.36364 5.21344 6.36364 5.45455C6.36364 5.69565 6.26786 5.92688 6.09737 6.09737C5.92688 6.26786 5.69565 6.36364 5.45455 6.36364ZM15.4545 15.4545H9.09091C8.8498 15.4545 8.61857 15.3588 8.44808 15.1883C8.2776 15.0178 8.18182 14.7866 8.18182 14.5455C8.18182 14.3043 8.2776 14.0731 8.44808 13.9026C8.61857 13.7321 8.8498 13.6364 9.09091 13.6364H15.4545C15.6957 13.6364 15.9269 13.7321
        16.0974 13.9026C16.2679 14.0731 16.3636 14.3043 16.3636 14.5455C16.3636 14.7866 16.2679 15.0178 16.0974 15.1883C15.9269 15.3588 15.6957 15.4545 15.4545 15.4545ZM15.4545 10.9091H9.09091C8.8498 10.9091 8.61857 10.8133 8.44808 10.6428C8.2776 10.4723 8.18182 10.2411 8.18182 10C8.18182 9.75889 8.2776 9.52766 8.44808 9.35718C8.61857 9.18669 8.8498 9.09091 9.09091 9.09091H15.4545C15.6957 9.09091 15.9269 9.18669 16.0974 9.35718C16.2679 9.52766 16.3636 9.75889 16.3636 10C16.3636 10.2411 16.2679 10.4723 16.0974 10.6428C15.9269 10.8133 15.6957 10.9091 15.4545 10.9091ZM15.4545 6.36364H9.09091C8.8498 6.36364 8.61857 6.26786 8.44808 6.09737C8.2776 5.92688 8.18182 5.69565 8.18182 5.45455C8.18182 5.21344 8.2776 4.98221 8.44808 4.81172C8.61857 4.64123 8.8498 4.54545 9.09091 4.54545H15.4545C15.6957 4.54545 15.9269 4.64123 16.0974 4.81172C16.2679 4.98221 16.3636 5.21344 16.3636 5.45455C16.3636 5.69565 16.2679 5.92688 16.0974 6.09737C15.9269 6.26786 15.6957 6.36364 15.4545 6.36364Z"
                        />
                      </svg>
                    </div>
                    <span style="letter-spacing: 0px"> {{ $t("desc1") }} </span>
                  </div>
                </div>

                <div
                  @click="(tabActive = 3), (tab = 2)"
                  :class="{ active: tabActive == 3 }"
                  class="d-flex icon align-items-center gap-2"
                >
                  <div class="mb-2 d-flex align-items-center gap-2">
                    <div class="circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.56183 4.72808L4.36617 3.5861C4.34254 3.44812 4.38824 3.30736 4.48836 3.20964L5.31722 2.40089C5.56941 2.15483 5.43027 1.72609 5.08172 1.67541L3.93621 1.50881C3.79781 1.48867 3.67816 1.40167 3.61629 1.27612L3.10406 0.237096C2.9482 -0.0790321 2.49785 -0.0790321 2.34199 0.237096L1.82968 1.27612C1.76781 1.40167 1.64816 1.48867 1.50976 1.50881L0.364255 1.67537C0.0157388 1.72609 -0.123402 2.15479 0.128786 2.40089L0.957653 3.20964C1.05781 3.30736 1.10351 3.44816 1.07984 3.5861L0.884177 4.72808C0.824645 5.07552 1.18898 5.34051 1.5007 5.17644L2.52527 4.63729C2.64906 4.57214 2.79695 4.57214 2.92074 4.63729L3.94531 5.17644C4.25703 5.34047 4.62137 5.07552 4.56183 4.72808Z"
                        />
                        <path
                          d="M8.23503 3.2096C8.33518 3.30732 8.38088 3.44812 8.35721 3.58607L8.16155 4.72804C8.10202 5.07549 8.46635 5.34047 8.77807 5.1764L9.80264 4.63725C9.92643 4.5721 10.0743 4.5721 10.1981 4.63725L11.2227 5.1764C11.5344 5.34043 11.8987 5.07549 11.8392 4.72804L11.6435 3.58607C11.6199 3.44808 11.6656 3.30732 11.7657 3.2096L12.5946 2.40085C12.8468 2.15479 12.7076 1.72605 12.3591 1.67537L11.2136 1.50877C11.0752 1.48863 10.9555 1.40163 10.8937 1.27608L10.3814 0.237096C10.2255 -0.0790321 9.77518 -0.0790321 9.61932 0.237096L9.10706 1.27612C9.04514 1.40167 8.92553 1.48867 8.78713 1.50881L7.64163 1.67541C7.29311 1.72609 7.15393 2.15483 7.40612 2.40089L8.23503 3.2096Z"
                        />
                        <path
                          d="M19.8719 2.40182C20.1241 2.15576 19.985 1.72703 19.6364 1.67635L18.4909 1.50974C18.3525 1.48961 18.2329 1.40261 18.171 1.27705L17.6587 0.238073C17.5029 -0.0780556 17.0525 -0.0780556 16.8967 0.238073L16.3844 1.27705C16.3225 1.40261 16.2029 1.48961 16.0645 1.50974L14.919 1.67635C14.5705 1.72703 14.4313 2.15576 14.6835 2.40182L15.5123 3.21058C15.6125 3.30829 15.6582 3.4491 15.6345 3.58704L15.4389 4.72901C15.3793 5.07646 15.7437 5.34145 16.0554 5.17738L17.0799 4.63822C17.2037 4.57308 17.3516 4.57308 17.4754 4.63822L18.5 5.17738C18.8117 5.34141 19.176 5.07646 19.1165 4.72901L18.9208 3.58704C18.8972 3.44906 18.9429 3.30829 19.043 3.21058L19.8719 2.40182Z"
                        />
                        <path
                          d="M5.38113 11.9863H3.47852C3.22289 11.9863 3.01562 12.1938 3.01562 12.4497V18.8996C3.01562 19.1555 3.22285 19.363 3.47852 19.363H5.38113C5.63676 19.363 5.84402 19.1555 5.84402 18.8996V12.4497C5.84402 12.1938 5.63676 11.9863 5.38113 11.9863Z"
                        />
                        <path
                          d="M16.7018 13.6059C16.9493 13.3953 17.1063 13.0814 17.1063 12.7307C17.1063 12.1007 16.5992 11.5894 15.9714 11.5828L15.9715 11.5815H12.4955C12.1457 11.5815 11.9045 11.2304 12.0296 10.9034L12.2931 10.235C12.705 9.15847 12.1781 7.95022 11.1094 7.52054C10.9689 7.46404 10.8089 7.52789 10.7457 7.6656L8.99828 11.351C8.63231 12.1484 7.87488 12.6853 7.01562 12.7762V18.6739C7.48289 18.7978 7.91266 19.046 8.25531 19.3994C8.62742 19.7831 9.13891 19.9997 9.67317 19.9997H15.2037L15.2039 19.9981C15.2254 19.9993 15.2471 20.0001 15.269 20.0001C15.9025 20.0001 16.4161 19.486 16.4161 18.8518C16.4161 18.5956 16.3323 18.3591 16.1906 18.1682C16.0801 18.0193 16.1006 17.8067 16.2417 17.6865C16.4892 17.476 16.6462 17.1621 16.6462 16.8114C16.6462 16.5552 16.5623 16.3187 16.4206 16.1278C16.3101 15.9789 16.3306 15.7663 16.4718 15.6462C16.7192 15.4356 16.8762 15.1217 16.8762 14.771C16.8762 14.5148 16.7923 14.2783 16.6506 14.0874C16.5402 13.9386 16.5606 13.726 16.7018 13.6059Z"
                        />
                      </svg>
                    </div>
                    <span style="letter-spacing: 0px"> {{ $t("desc2") }}</span>
                  </div>
                </div>

                <div
                  @click="(tabActive = 4), (tab = 3)"
                  :class="{ active: tabActive == 4 }"
                  class="d-flex icon align-items-center gap-2"
                >
                  <div class="mb-2 d-flex align-items-center gap-2">
                    <div class="circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                      >
                        <path
                          d="M9.50146 11.4287C8.8717 11.4287 8.26773 11.6796 7.82243 12.1261C7.37712 12.5726 7.12695 13.1782 7.12695 13.8096V20.0001H11.876V13.8096C11.876 13.1782 11.6258 12.5726 11.1805 12.1261C10.7352 11.6796 10.1312 11.4287 9.50146 11.4287Z"
                        />
                        <path
                          d="M16.0646 9.52389H14.9344C14.0479 9.5283 13.1877 9.22172 12.5029 8.65723C11.8113 9.21618 10.9502 9.5219 10.0619 9.52389H8.94114C8.05283 9.5219 7.19177 9.21618 6.50015 8.65723C5.81532 9.22172 4.95517 9.5283 4.06866 9.52389H2.93839C2.68326 9.52309 2.42879 9.49757 2.17855 9.4477C1.92045 9.40569 1.66846 9.33212 1.42821 9.22865V17.1429C1.41296 17.5055 1.46963 17.8675 1.59492 18.2079C1.72022 18.5484 1.91165 18.8606 2.15813 19.1263C2.40461 19.3921 2.70124 19.6061 3.03082 19.7561C3.3604 19.9061 3.71639 19.989 4.07815 20H6.17721V13.8096C6.17721 12.9255 6.52745 12.0777 7.15088 11.4526C7.77431 10.8274 8.61986 10.4763 9.50152 10.4763C10.3832 10.4763 11.2287 10.8274 11.8522 11.4526C12.4756 12.0777 12.8258 12.9255 12.8258 13.8096V20H14.9249C15.2866 19.989 15.6426 19.9061 15.9722 19.7561C16.3018 19.6061 16.5984 19.3921 16.8449 19.1263C17.0914 18.8606 17.2828 18.5484 17.4081 18.2079C17.5334 17.8675 17.5901 17.5055 17.5748 17.1429V9.22865C17.094 9.41993 16.5819 9.52004 16.0646 9.52389Z"
                        />
                        <path
                          d="M18.4486 3.68585C18.3082 3.50365 18.1418 3.3432 17.9547 3.20967L17.4038 1.61921C17.2274 1.13949 16.9071 0.726316 16.487 0.436425C16.067 0.146534 15.5677 -0.00585937 15.0578 0.000172381H3.94515C3.43525 -0.00585937 2.936 0.146534 2.51594 0.436425C2.09588 0.726316 1.77562 1.13949 1.59914 1.61921L1.05776 3.17157C1.05331 3.19036 1.05331 3.20993 1.05776 3.22872C0.711999 3.47944 0.434371 3.813 0.250212 4.19895C0.066053 4.5849 -0.018773 5.01095 0.00347607 5.43822C-0.004581 5.97538 0.121563 6.50601 0.37041 6.98177C0.619257 7.45752 0.982894 7.86326 1.42818 8.16201C1.71781 8.34254 2.0409 8.46241 2.37798 8.51438C2.56224 8.5532 2.75008 8.57235 2.93836 8.57153H4.06862C4.55068 8.57106 5.0251 8.45076 5.44942 8.22141C5.87375 7.99205 6.23475 7.66078 6.50012 7.25725C6.76821 7.66033 7.13111 7.99107 7.55681 8.22027C7.9825 8.44948 8.45792 8.57011 8.9411 8.57153H10.0619C10.5451 8.57011 11.0205 8.44948 11.4462 8.22027C11.8719 7.99107 12.2348 7.66033 12.5029 7.25725C12.7682 7.66078 13.1292 7.99205 13.5535 8.22141C13.9779 8.45076 14.4523 8.57106 14.9343 8.57153H16.0646C16.2529 8.57235 16.4407 8.5532 16.625 8.51438C16.9621 8.46241 17.2852 8.34254 17.5748 8.16201C18.0196 7.86051 18.3827 7.45287 18.6314 6.97575C18.8801 6.49863 19.0066 5.967 18.9995 5.4287C19.0112 4.80293 18.8177 4.19062 18.4486 3.68585Z"
                        />
                      </svg>
                    </div>
                    <span style="letter-spacing: 0px">{{ $t("desc3") }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-100">
              <div v-if="tab == 0">
                <div class="table-responsive">
                  <table
                    v-if="mainProduct.variations"
                    class="table table-stripe"
                  >
                    <thead>
                      <tr>
                        <th scope="col">{{ $t("weight") }}</th>
                        <th scope="col">{{ $t("size1") }}</th>
                        <th scope="col">{{ $t("price") }}</th>
                      </tr>
                    </thead>
                    <tbody class=" ">
                      <tr
                        v-for="(item, index) in mainProduct?.variations"
                        class=""
                        @click="
                          changePrice(
                            item.discount_price
                              ? item.discount_price
                              : item.price,
                            item.size,
                            item.weight,
                            item
                          )
                        "
                        style="cursor: pointer"
                      >
                        <!-- <td class="headd headd1">{{ $t("weight") }}</td> -->
                        <td class="">{{ item.weight }} {{ $t("g") }}</td>
                        <!-- <td class="headd">{{ $t("desc info2") }}</td> -->
                        <td class="headd2">{{ item.size }}</td>
                        <!-- <td class="headd">{{ $t("price") }}</td> -->
                        <td class="headd2">
                          {{
                            item.discount_price
                              ? item.discount_price
                              : item.price
                          }}
                          {{ $t("curr") }}
                          <span
                            v-if="item.discount_price"
                            class="px-1"
                            style="
                              text-decoration: line-through;
                              color: #cfd3d6;
                              font-size: 12px;
                            "
                            >{{ item.price }}</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div v-if="tab == 1">
                <div class="table-responsive">
                  <table class="table table-stripe">
                    <thead>
                      <tr>
                        <!-- <th scope="col">{{ $t("design") }}</th> -->
                        <!-- <th scope="col">{{ $t("desc info2")  }}</th> -->
                      </tr>
                    </thead>
                    <tbody class=" ">
                      <tr class="">
                        <td class="headd headd1">{{ $t("design") }}</td>
                        <td class="">{{ mainProduct.description }}</td>
                        <td class="headd">{{ $t("desc info1") }}</td>
                        <td class="headd2">
                          {{ $t("caliber") }} {{ mainProduct.caliber }}
                          {{ $t("carat") }}
                        </td>
                      </tr>
                      <tr>
                        <td class="headd headd1">{{ $t("size1") }}</td>
                        <td>{{ mainProduct.size }}</td>
                        <td class="headd">{{ $t("weight") }}</td>
                        <td class="headd2">
                          {{ mainProduct.weight }} {{ $t("weight1") }}
                        </td>
                      </tr>
                      <tr>
                        <td class="headd headd1">{{ $t("desc info3") }}</td>
                        <td>{{ mainProduct.maintenance_and_care }}</td>
                        <td class="headd">{{ $t("desc info4") }}</td>
                        <td class="headd2">{{ mainProduct.main_stone }}</td>
                      </tr>
                      <tr>
                        <td class="headd headd1">{{ $t("desc info5") }}</td>
                        <td>{{ mainProduct.packaging }}</td>
                        <td class="headd">{{ $t("desc info6") }}</td>
                        <td class="headd2">{{ mainProduct.guarantee }}</td>
                      </tr>
                      <tr>
                        <td class="headd headd1">{{ $t("desc info7") }}</td>
                        <td>{{ mainProduct.sustainable_assets }}</td>
                        <td class="headd">{{ $t("color") }}</td>
                        <td class="headd2">{{ mainProduct.color }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div v-if="tab == 2">
                <div class="rating-container">
                  <div
                    class="head w-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 justify-content-between mt-4"
                  >
                    <div
                      class="text d-flex align-items-center align-items-xl-start align-items-lg-start flex-column gap-2"
                    >
                      <h6>{{ $t("write comment") }}</h6>
                      <span> {{ $t("share comment") }} </span>
                    </div>
                    <div class="d-flex flex-column align-items-center gap-2">
                      <v-rating
                        style="direction: ltr"
                        half-increments
                        hover
                        :length="5"
                        :size="29"
                        @update:model-value="updateRateInput"
                        color="#919EAB"
                        active-color="#ECB43C"
                      />
                      <span class="text-danger" v-if="rateInputError.rate">{{
                        rateInputError.rate[0]
                      }}</span>
                    </div>
                  </div>

                  <div
                    class="send-input w-100 d-flex align-items-center justify-content-between"
                  >
                    <input
                      type="text"
                      v-model="store.state.product.commentInput"
                      :placeholder="$t('share comment')"
                    />
                    <button @click="addComment()">
                      <span> {{ $t("share") }} </span>
                      <svg
                        class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7
                       0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
                        />
                      </svg>
                    </button>
                  </div>
                  <span class="text-danger" v-if="rateInputError.comment">{{
                    rateInputError.comment[0]
                  }}</span>

                  <div class="comments-container">
                    <div
                      class="head w-100 d-flex align-items-center gap-3 flex-column flex-xl-row flex-xl-row justify-content-between mt-4"
                    >
                      <div class="text d-flex flex-column gap-2">
                        <h6>{{ $t("comments") }}</h6>
                        <span>
                          {{ $t("comment") }} {{ AllItems.length }}
                          {{ $t("all") }}</span
                        >
                      </div>
                      <div
                        v-if="AllItems.is_recommended"
                        class="recommend d-flex align-items-center gap-2"
                      >
                        <img src="~/assets/images/medal.svg" alt="" />
                        <div class="textt d-flex flex-column gap-1">
                          <span> {{ $t("rec") }} </span>
                          <span class="ratio">
                            {{ $t("rec1") }} ({{
                              $t(AllItems.recommendationPercentage)
                            }})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="comments d-flex flex-column gap-5 mt-4">
                      <!-- <v-data-iterator :items="AllItems" :items-per-page="commentPerPage">
                        <template v-slot:default="{ items }">
                      
                         
                        </template>
                      </v-data-iterator> -->

                      <div
                        v-for="(item, index) in itemsArray"
                        :key="index"
                        class="comment w-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row justify-content-between"
                      >
                        <div class="main d-flex gap-2 w-100">
                          <img :src="item.customer_image" alt="" />
                          <div class="text d-flex flex-column gap-1">
                            <span class="name">
                              {{ item.customer_name }}
                            </span>
                            <div
                              v-if="item && item.comment"
                              class="comment-text"
                            >
                            
                              {{
                                item.showFullText ? item.comment: item.truncatedText
                              }}
                              <button
                                v-if="item.comment.length > maxCharacters"
                                @click="toggleReadMore(index)"
                              >
                                {{
                                  item.showFullText ? $t("show less") : $t("show more")
                                }}
                              </button>
                            </div>
                            <span class="time"> {{ item.created_at }}</span>
                          </div>
                        </div>
                        <v-rating
                          style="direction: ltr"
                          half-increments
                          readonly
                          :length="5"
                          :size="29"
                          :model-value="item.rate"
                          color="#919EAB"
                          active-color="#ECB43C"
                        />
                      </div>

                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <button @click="showAllComments" class="load-more">
                          <i class="fa-solid fa-rotate-left"></i>
                          <span> {{ $t("show comments") }} </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="tab == 3">
                <div class="vendor-details row">
                  <div class="col-12 col-xl-4 col-lg-4">
                    <div
                      class="vendor-image d-flex align-items-center flex-column justify-content-around"
                    >
                      <div class="check">
                        <img src="~/assets/images/check.svg" alt="" />
                        <span> {{ $t("store valid") }} </span>
                      </div>
                      <img class="image" :src="mainVendor.logo" alt="" />

                      <div class="text">
                        <h5>{{ $t("store") }} {{ mainVendor.name }}</h5>
                        <span>
                          {{ $t("dateWith") }}
                          {{ mainVendor.created_at }}</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-xl-4 col-lg-4">
                    <div class="more-details">
                      <div class="details d-flex flex-column gap-3">
                        <div class="info">
                          <div class="d-flex align-items-center">
                            <img src="~/assets/images/v1.svg" alt="" />
                            <span class="main">
                              {{ $t("products number") }}</span
                            >
                          </div>
                          <span class="count">
                            {{ mainVendor.products_count }}
                            {{ $t("product") }}
                          </span>
                        </div>
                        <div class="info">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/v2.svg" alt="" />
                            <span class="main"> {{ $t("rate1") }}</span>
                          </div>
                          <v-rating
                            style="direction: ltr"
                            half-increments
                            readonly
                            :length="5"
                            :size="20"
                            :model-value="mainVendor.rate"
                            color="#919EAB"
                            active-color="#ECB43C"
                          />
                        </div>
                        <div class="info">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/v3.svg" alt="" />
                            <span class="main"> {{ $t("vendor1") }}</span>
                          </div>
                          <span class="span">
                            {{ mainVendor.commercial_register_number }}
                          </span>
                        </div>
                        <div class="info">
                          <div class="d-flex align-items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1472_21212)">
                                <path
                                  d="M6.375 11.3438C2.88567 11.3438 0.046875 14.1825 0.046875 17.6719C0.046875 21.1612 2.88567 24 6.375 24C9.86433 24 12.7031 21.1612 12.7031 17.6719C12.7031 14.1825 9.86433 11.3438 6.375 11.3438ZM9.16903 16.9034L5.88778 20.1847C5.75053 20.322 5.57058 20.3906 5.39062 20.3906C5.21067 20.3906 5.03072 20.322 4.89347 20.1847L3.48722 18.7784C3.21262 18.5039 3.21262 18.0586 3.48722 17.784C3.76177 17.5095 4.20698 17.5095 4.48158 17.784L5.39062 18.6931L8.17472 15.909C8.44927 15.6345 8.89448 15.6345 9.16908 15.909C9.44362 16.1836 9.44363 16.6289 9.16903 16.9034Z"
                                  fill="#919EAB"
                                />
                                <path
                                  d="M18.5625 6.09375C18.1742 6.09375 17.8594 5.77894 17.8594 5.39062V0H7.78125C6.61814 0 5.67188 0.946266 5.67188 2.10938V9.9698C5.90353 9.9488 6.13795 9.9375 6.375 9.9375C8.77163 9.9375 10.917 11.0332 12.3368 12.75H19.9688C20.3571 12.75 20.6719 13.0648 20.6719 13.4531C20.6719 13.8414 20.3571 14.1562 19.9688 14.1562H13.2632C13.7027 15.0139 13.9861 15.964 14.0771 16.9688H19.9688C20.3571 16.9688 20.6719 17.2836 20.6719 17.6719C20.6719 18.0602 20.3571 18.375 19.9688 18.375H14.0771C13.8668 20.6971 12.6261 22.7262 10.8168 24H21.8438C23.0069 24 23.9531 23.0537 23.9531 21.8906V6.09375H18.5625ZM19.9688 9.9375H9.65625C9.26794 9.9375 8.95312 9.62269 8.95312 9.23438C8.95312 8.84606 9.26794 8.53125 9.65625 8.53125H19.9688C20.3571 8.53125 20.6719 8.84606 20.6719 9.23438C20.6719 9.62269 20.3571 9.9375 19.9688 9.9375Z"
                                  fill="#919EAB"
                                />
                                <path
                                  d="M19.2656 0.412109V4.68791H23.5411L19.2656 0.412109Z"
                                  fill="#919EAB"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1472_21212">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span class="main"> {{ $t("vendor2") }}</span>
                          </div>
                          <span class="count"> {{ $t("vendor3") }} </span>
                        </div>
                      </div>
                      <v-divider :thickness="1"></v-divider>
                      <p>
                        {{ mainVendor.description }}
                      </p>

                      <button
                        @click="
                          goToVendor(
                            mainProduct.vendor_id,
                            mainProduct.vendor_name
                          )
                        "
                        class="action"
                      >
                        {{ $t("visit") }}
                      </button>
                    </div>
                  </div>

                  <div class="col-12 col-xl-4 col-lg-4">
                    <div class="most-selling h-100">
                      <h4>{{ $t("most selling") }}</h4>
                      <div
                        class="boxes d-flex flex-column h-100 bg-dange gap-4"
                      >
                        <div
                          v-for="item in mainVendor.bestSellerProducts"
                          class="box d-flex align-items-center gap-2"
                        >
                          <div class="image">
                            <img src="~/assets/images/p1.png" alt="" />
                          </div>
                          <div class="text w-100 d-flex flex-column gap-1">
                            <h5>{{ item.name }}</h5>
                            <div
                              class="price w-100 d-flex align-items-center justify-content-between"
                            >
                              <span class="item"
                                >{{
                                  `${item.caliber} / ${
                                    locale == "ar" ? "ق" : "c"
                                  }`
                                }}
                                {{
                                  `${item.weight} / ${
                                    locale == "ar" ? "ج" : "g"
                                  }`
                                }}</span
                              >
                              <span class="price-item">
                                {{ item.price }} {{ $t("curr") }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
    </div>
</template>
<script setup>
import { useStore } from "~/store";
const store = useStore;

let props = defineProps(["mainProduct"
 , "changePrice"
  , "updateRateInput"
 , "commentInput" ,
  "addComment" , 
  "rateInputError",
  "AllItems",
  "itemsArray",
  "toggleReadMore",
  "showAllComments",
  "maxCharacters",
  "mainVendor"
]
)
const tab = ref(0);
const tabActive = ref(1);
</script>
<style lang="">
    
</style>
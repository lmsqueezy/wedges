import { SVGProps, forwardRef } from "react";

export const StackBlitzIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M10.7608 13.1529H5.38965L15.209 2.5163L12.5659 9.87974H17.9371L8.11701 20.5163L10.7608 13.1529Z"
        fill="currentColor"
      />
    </svg>
  );
});

export const RadixIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M11.8369 19.75C9.31565 19.75 7.27173 17.5601 7.27173 14.8587C7.27173 12.1573 9.31565 9.96739 11.8369 9.96739V19.75Z"
        fill="currentColor"
      />
      <path d="M11.8369 4.75H7.27173V9.31522H11.8369V4.75Z" fill="currentColor" />
      <path
        d="M14.7717 9.31522C16.0324 9.31522 17.0543 8.29326 17.0543 7.03261C17.0543 5.77196 16.0324 4.75 14.7717 4.75C13.5111 4.75 12.4891 5.77196 12.4891 7.03261C12.4891 8.29326 13.5111 9.31522 14.7717 9.31522Z"
        fill="currentColor"
      />
    </svg>
  );
});

export const GithubIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M20.2574 8.53529C19.4784 7.20029 18.4214 6.14338 17.0866 5.36431C15.7515 4.5852 14.294 4.19574 12.7131 4.19574C11.1323 4.19574 9.67433 4.58532 8.33955 5.36431C7.00455 6.14335 5.94773 7.20029 5.16857 8.53529C4.38953 9.87024 4 11.328 4 12.9086C4 14.8072 4.55393 16.5144 5.66205 18.0308C6.77007 19.5474 8.20146 20.5967 9.95611 21.179C10.1604 21.2169 10.3116 21.1903 10.4099 21.0997C10.5082 21.009 10.5573 20.8955 10.5573 20.7595C10.5573 20.7368 10.5554 20.5327 10.5516 20.1469C10.548 19.8104 10.5461 19.4739 10.5459 19.1373L10.2849 19.1825C10.1185 19.213 9.90866 19.2259 9.65526 19.2223C9.40198 19.2187 9.13905 19.1921 8.8668 19.1428C8.59445 19.0939 8.34114 18.9805 8.10665 18.8027C7.87228 18.625 7.70591 18.3923 7.60756 18.105L7.49411 17.844C7.4185 17.6702 7.29944 17.4771 7.1368 17.2655C6.97415 17.0537 6.80969 16.91 6.64331 16.8344L6.56388 16.7776C6.51095 16.7398 6.46184 16.6941 6.41642 16.6413C6.37104 16.5884 6.33707 16.5354 6.31437 16.4825C6.29165 16.4295 6.31048 16.3859 6.37108 16.3518C6.43168 16.3176 6.54118 16.3011 6.70009 16.3011L6.92691 16.3349C7.07819 16.3653 7.26531 16.4558 7.48851 16.6072C7.71159 16.7584 7.89498 16.9551 8.0387 17.197C8.21275 17.5072 8.42243 17.7435 8.66836 17.9061C8.91409 18.0688 9.16186 18.15 9.4114 18.15C9.66095 18.15 9.87647 18.1311 10.0581 18.0935C10.2395 18.0556 10.4097 17.9987 10.5686 17.9231C10.6366 17.4162 10.822 17.0268 11.1244 16.7545C10.6934 16.7092 10.3058 16.641 9.96155 16.5503C9.61751 16.4594 9.26199 16.312 8.89522 16.1076C8.52825 15.9035 8.22384 15.65 7.98188 15.3476C7.73988 15.0451 7.54128 14.6478 7.38634 14.1563C7.23134 13.6647 7.15381 13.0974 7.15381 12.4546C7.15381 11.5393 7.45263 10.7603 8.05015 10.1174C7.77024 9.42924 7.79667 8.65779 8.12949 7.80314C8.34885 7.73499 8.67412 7.78614 9.10519 7.95624C9.53633 8.12644 9.852 8.27223 10.0525 8.39311C10.253 8.51395 10.4137 8.61635 10.5347 8.6994C11.2383 8.50282 11.9643 8.40451 12.713 8.40451C13.4617 8.40451 14.1879 8.50282 14.8915 8.6994L15.3226 8.42724C15.6173 8.24565 15.9655 8.07923 16.3661 7.92795C16.767 7.77676 17.0735 7.73511 17.2854 7.80326C17.6256 8.65796 17.6559 9.42936 17.376 10.1175C17.9735 10.7604 18.2723 11.5395 18.2723 12.4547C18.2723 13.0975 18.1946 13.6665 18.0398 14.162C17.8848 14.6575 17.6845 15.0544 17.4388 15.3533C17.1928 15.6521 16.8864 15.9036 16.5197 16.1077C16.1527 16.312 15.7971 16.4594 15.4531 16.5503C15.1089 16.6411 14.7214 16.7093 14.2903 16.7547C14.6835 17.0949 14.8801 17.632 14.8801 18.3655V20.7592C14.8801 20.8952 14.9273 21.0087 15.022 21.0994C15.1165 21.1899 15.2658 21.2166 15.4701 21.1787C17.2249 20.5965 18.6564 19.5471 19.7643 18.0305C20.8721 16.5141 21.4263 14.8069 21.4263 12.9082C21.4259 11.3279 21.0362 9.87024 20.2574 8.53529Z"
        fill="currentColor"
      />
    </svg>
  );
});

StackBlitzIcon.displayName = "StackBlitzIcon";
RadixIcon.displayName = "RadixIcon";
GithubIcon.displayName = "GithubIcon";

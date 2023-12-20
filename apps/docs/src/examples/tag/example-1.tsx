import * as React from "react";
import { BookIcon, FileIcon, FolderIcon, TrashIcon } from "@iconicicons/react";
import { Avatar, Tag } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag closable>Pineapple</Tag>

        <Tag color="yellow" closable stroke>
          Lemons
        </Tag>

        <Tag closable>Watermelon</Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag before={<DotIcon />} color="green">
          Online
        </Tag>

        <Tag before={<DotIcon />} color="red">
          Offline
        </Tag>

        <Tag before={<DotIcon className="text-surface-300" />}>Suspended</Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag
          avatar={<Avatar src="https://github.com/ormanclark.png" />}
          closable
          shape="pill"
          stroke
        >
          @ormanclark
        </Tag>

        <Tag
          avatar={<Avatar src="https://github.com/lmsqueezy.png" />}
          color="orange"
          shape="pill"
          stroke
        >
          Lemon Squeezy
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag before={<FolderIcon />} color="blue" closable>
          Folders
        </Tag>

        <Tag before={<FileIcon />} color="blue">
          Files
        </Tag>

        <Tag before={<BookIcon />} color="blue" closable>
          Guides
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag color="yellow" closable stroke>
          New
        </Tag>

        <Tag color="orange" closable stroke>
          Pending
        </Tag>

        <Tag color="green" closable stroke>
          Active
        </Tag>

        <Tag color="red" closable stroke>
          Closed
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag color="primary" closable shape="pill">
          Free parking
        </Tag>

        <Tag color="primary" closable shape="pill">
          Pool
        </Tag>

        <Tag color="primary" closable shape="pill">
          Free WiFi
        </Tag>

        <Tag color="primary" closable shape="pill">
          Gym
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag before={<UKFlagIcon />} closable>
          United Kingdom
        </Tag>

        <Tag before={<USFlagIcon />} closable>
          United States
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          ux
        </Tag>

        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          ui
        </Tag>

        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          motion
        </Tag>

        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          graphics
        </Tag>
      </div>
    </div>
  );
}

/* ---------------------------------- Icons --------------------------------- */
const USFlagIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props} ref={ref}>
        <path
          d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.065 12L22.5 12C22.5 11.0974 22.3794 10.223 22.1552 9.39129H12.065V12Z"
          fill="#D80027"
        />
        <path
          d="M12.065 6.78211H21.032C20.4198 5.7832 19.6371 4.90027 18.7246 4.1734H12.065V6.78211Z"
          fill="#D80027"
        />
        <path
          d="M12.5 22C14.8535 22 17.0164 21.1866 18.7246 19.8261H6.27492C7.98312 21.1866 10.1465 22 12.5 22Z"
          fill="#D80027"
        />
        <path
          d="M3.96755 17.2166H21.0321C21.5235 16.4147 21.9047 15.5381 22.1553 14.6079H2.8443C3.09497 15.5381 3.4761 16.4147 3.96755 17.2166Z"
          fill="#D80027"
        />
        <path
          d="M7.13219 3.56164H8.04348L7.19582 4.17746L7.51961 5.17391L6.67199 4.55809L5.82437 5.17391L6.10406 4.31309C5.35773 4.93477 4.70359 5.66313 4.16453 6.47469H4.45652L3.91695 6.86668C3.83289 7.00691 3.75227 7.14938 3.675 7.29395L3.93266 8.08695L3.45195 7.7377C3.33246 7.99086 3.22316 8.24973 3.12492 8.51398L3.40879 9.38773H4.45652L3.60887 10.0036L3.93266 11L3.08504 10.3842L2.5773 10.7531C2.52648 11.1616 2.5 11.5777 2.5 12H12.5C12.5 6.47719 12.5 5.82609 12.5 2C10.5245 2 8.68301 2.57305 7.13219 3.56164ZM7.51961 11L6.67199 10.3842L5.82437 11L6.14816 10.0036L5.30051 9.38773H6.34824L6.67199 8.39129L6.99574 9.38773H8.04348L7.19582 10.0036L7.51961 11ZM7.19582 7.09051L7.51961 8.08695L6.67199 7.47113L5.82437 8.08695L6.14816 7.09051L5.30051 6.47469H6.34824L6.67199 5.47824L6.99574 6.47469H8.04348L7.19582 7.09051ZM11.1066 11L10.2589 10.3842L9.41133 11L9.73512 10.0036L8.88746 9.38773H9.9352L10.2589 8.39129L10.5827 9.38773H11.6304L10.7828 10.0036L11.1066 11ZM10.7828 7.09051L11.1066 8.08695L10.2589 7.47113L9.41133 8.08695L9.73512 7.09051L8.88746 6.47469H9.9352L10.2589 5.47824L10.5827 6.47469H11.6304L10.7828 7.09051ZM10.7828 4.17746L11.1066 5.17391L10.2589 4.55809L9.41133 5.17391L9.73512 4.17746L8.88746 3.56164H9.9352L10.2589 2.5652L10.5827 3.56164H11.6304L10.7828 4.17746Z"
          fill="#0052B4"
        />
      </svg>
    );
  }
);

const UKFlagIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props} ref={ref}>
        <path
          d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
          fill="#F0F0F0"
        />
        <path
          d="M4.56724 5.91083C3.78173 6.93282 3.18942 8.11075 2.84454 9.3904H8.0468L4.56724 5.91083Z"
          fill="#0052B4"
        />
        <path
          d="M22.1558 9.39052C21.811 8.11091 21.2186 6.93298 20.4331 5.91099L16.9537 9.39052H22.1558Z"
          fill="#0052B4"
        />
        <path
          d="M2.84454 14.6085C3.18946 15.8881 3.78177 17.0661 4.56724 18.088L8.04669 14.6085H2.84454Z"
          fill="#0052B4"
        />
        <path
          d="M18.588 4.06648C17.566 3.28097 16.3881 2.68867 15.1084 2.34374V7.54597L18.588 4.06648Z"
          fill="#0052B4"
        />
        <path
          d="M6.41163 19.9314C7.43362 20.7169 8.61155 21.3092 9.89116 21.6541V16.452L6.41163 19.9314Z"
          fill="#0052B4"
        />
        <path
          d="M9.89112 2.34374C8.61151 2.68866 7.43358 3.28097 6.41163 4.06644L9.89112 7.54593V2.34374Z"
          fill="#0052B4"
        />
        <path
          d="M15.1084 21.6541C16.388 21.3092 17.566 20.7169 18.5879 19.9314L15.1084 16.452V21.6541Z"
          fill="#0052B4"
        />
        <path
          d="M16.9537 14.6085L20.4331 18.088C21.2186 17.0661 21.811 15.8881 22.1558 14.6085H16.9537Z"
          fill="#0052B4"
        />
        <path
          d="M22.4154 10.6957H13.8044L13.8044 2.08465C13.3774 2.02906 12.9421 2 12.5 2C12.0579 2 11.6226 2.02906 11.1957 2.08465V10.6956L2.58465 10.6956C2.52906 11.1226 2.5 11.5579 2.5 12C2.5 12.4421 2.52906 12.8774 2.58465 13.3043H11.1956L11.1956 21.9154C11.6226 21.9709 12.0579 22 12.5 22C12.9421 22 13.3774 21.971 13.8043 21.9154V13.3044L22.4154 13.3044C22.4709 12.8774 22.5 12.4421 22.5 12C22.5 11.5579 22.4709 11.1226 22.4154 10.6957Z"
          fill="#D80027"
        />
        <path
          d="M15.1087 14.6094L19.571 19.0717C19.7763 18.8666 19.9721 18.6521 20.1588 18.4297L16.3385 14.6093L15.1087 14.6094Z"
          fill="#D80027"
        />
        <path
          d="M9.89127 14.6093L5.42889 19.0716C5.63405 19.2769 5.84854 19.4727 6.07088 19.6595L9.89127 15.839V14.6093Z"
          fill="#D80027"
        />
        <path
          d="M9.89115 9.39093L5.4288 4.92847C5.22357 5.13363 5.02779 5.34812 4.84099 5.57047L8.66142 9.3909L9.89115 9.39093Z"
          fill="#D80027"
        />
        <path
          d="M15.1087 9.39182L19.5711 4.9294C19.3659 4.72417 19.1514 4.52839 18.9291 4.34163L15.1087 8.16206V9.39182Z"
          fill="#D80027"
        />
      </svg>
    );
  }
);

const DotIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg {...props} fill="none" height="24" ref={ref} viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
);

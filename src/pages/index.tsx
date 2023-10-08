import type { NextPage } from 'next';

import Image from 'next/image';

import { useContext } from 'react';

import clsx from 'clsx';

import * as AntDesignLogoSVG from 'public/ant_design_logo.svg';

import * as NestJSLogoSVG from 'public/nestjs_logo.svg';

import PublicationsProspectPNG from 'public/publications_prospect.png';

import { ThemeContext } from '@/stores/theme';

import { montserrat } from '@/lib/utils';

import styles from './index.module.css';

interface IProps {}

const Home: NextPage<IProps> = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={styles.container}>
                {/* 简介 */}
                <div className={styles.intro}>
                    <div className={styles.textGroup}>
                        <h1 className={styles.title}>茶灯</h1>
                        <p className={styles.text}>专注于多租户解决方案的中后台快速开发平台</p>
                    </div>
                    <div className={styles.bodyIcon} />
                </div>
                {/* 体系 */}
                <div className={styles.hierarchy}>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_cc51a2b4c28d483229f43f47f43b3cba.png"
                            alt="前端工程体系"
                        />
                        <p className={styles.p}>前端工程体系</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_87d88480092f800d401430d17fa03beb.png"
                            alt="Node.js 工程体系"
                        />
                        <p className={styles.p}>Node.js 工程体系</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_0e813455b23f41ec5297b325b7433604.png"
                            alt="跨平台解决方案"
                        />
                        <p className={styles.p}>跨平台解决方案</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_808592aacaa6e604f23c642582544d69.png"
                            alt="安全"
                        />
                        <p className={styles.p}>安全</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_6fcbf36536c4b9cac7d0b1a4fad05ca7.png"
                            alt="效率平台"
                        />
                        <p className={styles.p}>效率平台</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_438203e854de2d4814df0a799c70e09c.png"
                            alt="互动技术"
                        />
                        <p className={styles.p}>互动技术</p>
                    </div>
                </div>
                {/* 技术方向 */}
                <div className={styles.feature}>
                    <div className={styles.prospect}>
                        <div className={styles.headGroup}>
                            <h2>优势特点</h2>
                            <div className={styles.divide} />
                            <h3>Feature</h3>
                        </div>
                    </div>
                    <div className={styles.featureContent}>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>快速开发</h3>
                                    <p className={styles.p}>
                                        快速CRUD，只需少量配置即可完成单表、主从、树结构等页面的增删改查，节省开发成本，缩短开发周期
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>多种多租户的解决方案</h3>
                                    <p className={styles.p}>
                                        独立数据库(DATASOURCE模式)、共享数据架构隔离数据架构(SCHEMA模式)、共享数据库共享数据架构(COLUMN模式)等方式
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>前沿的技术</h3>
                                    <p className={styles.p}>
                                        Next.JS、TypeScript、Ant
                                        Design、NestJS、TypeORM、Vite、PostCSS、TailwindCSS、ShadcnUI等主流技术框架
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>丰富功能</h3>
                                    <p className={styles.p}>
                                        RBAC权限体系、在线代码生成器、前后端统一表单校验、字典回显、系统配置、自动填充等功能一应俱全
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 技术产品 */}
                <div className={styles.technologyProduct}>
                    <h2 className={styles.title}>技术产品</h2>
                    <div className={styles.content}>
                        <a
                            className={styles.labelBasicA}
                            href="https://nextjs.org"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className={styles.nextLogoSpan}>
                                <div className={styles.nextLogoImg} />
                            </span>
                            <div className={styles.nextLogoAppend}>
                                {/* 这个svg因为涉及到文字的颜色变换，要改填充颜色fill，在public目录下的svg文件无法识别，所以完整贴出来 */}
                                <svg
                                    aria-label="Next.js logotype"
                                    height="18"
                                    role="img"
                                    viewBox="0 0 394 79"
                                >
                                    <path
                                        d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                                        fill="var(--primary-color)"
                                    />
                                    <path
                                        d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                                        fill="var(--primary-color)"
                                    />
                                    <path
                                        d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                                        fill="var(--primary-color)"
                                    />
                                    <path
                                        d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                                        fill="var(--primary-color)"
                                    />
                                    <path
                                        clipRule="evenodd"
                                        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                                        fill="var(--primary-color)"
                                        fillRule="evenodd"
                                    />
                                    <path
                                        d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                                        fill="var(--primary-color)"
                                    />
                                    <path
                                        d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                                        fill="var(--primary-color)"
                                    />
                                    <path
                                        d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                                        fill="var(--primary-color)"
                                    />
                                </svg>
                            </div>
                        </a>
                        <a
                            className={styles.labelBasicA}
                            href="https://ant.design"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {/* 这里的svg因为不用改填充颜色fill，可以直接使用next/image引入 */}
                            <Image
                                src={AntDesignLogoSVG}
                                alt="AntDesignLogoSVG"
                                width={43}
                                height={43}
                            />
                            <span className={styles.logoText}>Ant Design</span>
                        </a>
                        <a
                            className={styles.labelBasicA}
                            href="https://nestjs.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {/* 同上，不用填充颜色 */}
                            <Image src={NestJSLogoSVG} alt="NestJSLogoSVG" width={43} height={43} />
                            <span className={clsx(styles.logoText, montserrat.className)}>
                                NestJS
                            </span>
                        </a>
                        <a
                            className={styles.labelBasicA}
                            href="https://tailwindcss.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className={styles.tailwindDiv}>
                                <svg viewBox="0 0 250 31" className={styles.tailwindSvg}>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                                        fill="#38bdf8"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                                        fill="var(--primary-color)"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                {/* 期刊专栏，复用优势特点 */}
                <div className={clsx(styles.feature)}>
                    <div className={styles.prospect}>
                        <div className={styles.headGroup}>
                            <h2>期刊专栏</h2>
                            <div className={styles.divide} />
                            <h3>Publications</h3>
                        </div>
                        <a href="/publications" rel="noopener noreferrer" target="_blank">
                            <button className={styles.btn}>查看更多</button>
                        </a>
                    </div>
                    <div className={styles.publicationsContent}>
                        <a className={styles.a} href="/publicationContent/793000000001">
                            <div className={styles.divGroup}>
                                <div className={styles.leftDiv}>
                                    <Image
                                        src={PublicationsProspectPNG}
                                        alt="即将到来"
                                        width={560}
                                        height={280}
                                    />
                                </div>
                                <div className={styles.rightDiv}>
                                    <p className={styles.p}>2023/10/08</p>
                                    <h2 className={styles.h2}>即将到来</h2>
                                    <p className={styles.p}>茶灯全栈技术周刊 即将到来</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* 加入我们 */}
                <div className={styles.joinUs}>
                    <div className={styles.up}>
                        <p className={styles.p}>
                            在保证用户体验的前提下致力于以先进全栈技术提升产品迭代速度，
                            致力于打造最顶级的跨端技术开发栈。
                        </p>
                        <a href="/joinUs" rel="noopener noreferrer" target="_blank">
                            <button className={styles.btn}>加入我们</button>
                        </a>
                    </div>
                    <div className={styles.down}>
                        <div className={styles.bg} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

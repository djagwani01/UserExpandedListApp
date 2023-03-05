import styles from '@/styles/Index.module.css';
import Image from 'next/image';

export const Header = (props) => {
    const {title, iconPath, iconAlt} = props
    return (
        <>
            <div className={styles.header}>
                <Image
                    src= {iconPath}
                    alt={iconAlt}
                    width={25}
                    height={25}
                    className={styles.logo}
                />
                <div className={styles.title}>
                    {title}
                </div>
            </div>
        </>
    )
}
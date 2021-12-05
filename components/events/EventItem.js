import Image from 'next/image';
import Button from '../ui/Button';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

import classes from './styles/EventItem.module.css';

export default function EventItem(props) {
  const {title, image, date, location, id} = props;

  const humanReadableDate = new Date(date).toLocaleDateString('us-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location?.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={310} height={310} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

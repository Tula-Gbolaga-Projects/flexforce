import { format, differenceInHours } from 'date-fns';

const formatDateTime = ( date, dateFormat = "yyyy-LL-dd" ) =>
{
    return format( date, dateFormat );
};

const compareDiffInHours = ( futureDate, pastDate ) =>
{
    const result = differenceInHours(
        futureDate,
        pastDate
    );

    return result;
};

export
{
    formatDateTime,
    compareDiffInHours
};

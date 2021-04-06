import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
// import DesktopDateRangePicker from '@material-ui/lab/DesktopDateRangePicker';
import vi from 'date-fns/locale/vi';
import { viVN } from '@material-ui/core/locale';
import DateFnsUtils from '@date-io/date-fns';

export default function ResponsiveDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);
    console.log(`value`, value);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={vi}
                            utils={DateFnsUtils}
                        >
                            <MobileDateRangePicker
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                cancelText="Hủy"
                                startText="Ngày bắt đầu"
                                endText="Ngày kết thúc"
                                okText="Xong"
                                toolbarFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                toolbarTitle={false}
                                calendars={2}
                                format="dd/MM/yyyy"
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField
                                            {...startProps}
                                            variant="standard"
                                        />
                                        <Box sx={{ mx: 2 }}> to </Box>
                                        <TextField
                                            {...endProps}
                                            variant="standard"
                                        />
                                    </React.Fragment>
                                )}
                            />
                            {/* <DesktopDateRangePicker
                                startText="Desktop start"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField
                                            {...startProps}
                                            variant="standard"
                                        />
                                        <Box sx={{ mx: 2 }}> to </Box>
                                        <TextField
                                            {...endProps}
                                            variant="standard"
                                        />
                                    </React.Fragment>
                                )}
                            /> */}
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}

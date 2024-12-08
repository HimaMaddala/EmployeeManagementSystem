package com.employee_management.management.helpers;

import java.time.LocalDate;

public class CommonHelpers {

    public static String convertDate(String dateString){
        String[] parts = dateString.split("-");
        if(parts.length != 3){
            throw new IllegalArgumentException("Invalid date format. Expected format is YYYY-mm-dd");
        }

        String year = parts[0];
        String month = parts[1];
        String day = parts[2];

        String ddmmyy = day + month + year;
        return ddmmyy;
    }
}

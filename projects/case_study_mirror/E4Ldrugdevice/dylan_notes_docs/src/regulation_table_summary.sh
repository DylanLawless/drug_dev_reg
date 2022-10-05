#!/bin/bash

cd ../../

head -1 regulation_table.csv | cut -f5,6,10,11 -d',' > regulation_table_summary.csv

tail -n +2 regulation_table.csv | cut -f5,6,10,11 -d',' | sort | uniq >> regulation_table_summary.csv

printf "Note: this summary file is gerated using the script found in dylan_notes_docs/src/regulation_table_summary.sh" >> regulation_table_summary.csv

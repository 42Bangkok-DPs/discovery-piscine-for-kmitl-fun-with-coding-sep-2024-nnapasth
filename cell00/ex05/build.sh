#!/bin/bash

# Check if no arguments are supplied
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through each argument
for arg in "$@"; do
    # Create a directory with the name "ex" followed by the argument
    mkdir "ex$arg"
done



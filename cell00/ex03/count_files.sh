#!/bin/bash
# Count the number of regular files and directories in the current directory

count=$(find . -maxdepth 1 -type f -o -type d | grep -v '^\./\.' | wc -l)
echo "$count"

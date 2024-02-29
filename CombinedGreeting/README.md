# CombinedGreeting

This project contains code for a managed package that consumes another managed package in a different namespace.

## Packaging

Create the package
`sf package create -n combinedGreeting -t Managed -v pboDevHub -r force-app/`

Create the package version
`sf package version create --installation-key-bypass -v pboDevHub -c -p 0HoHs000000blhLKAQ -w 10`

Promote the package version
`sf package version promote -v pboDevHub -p 04tHs000000BxUBIA0`

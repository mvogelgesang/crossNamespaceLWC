# 40219497-crossNamespaceLWC-a

create a namespaced LWC that gets consumed by another project with a different namespace


## Packaging

Create the package
`sf package create -n greeting -t Managed -v pboDevHub -r force-app/`

Create the package version
`sf package version create --installation-key-bypass -v pboDevHub -c -p 0HoHs000000blhBKAQ -w 10`

Promote the package version
`sf package version promote -v pboDevHub -p 04tHs000000BxUBIA0`
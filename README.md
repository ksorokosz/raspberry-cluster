# Getting Started

Raspberry Pi kubernetes cluster with DNS

## Prepare at least 4 RPi devices

Raspberry Pi kubernetes cluster was tested on RPi 3B+ and Raspbian Buster Lite operating system.

## Add DHCP rules for the following IPs for specified RPi devices

- 192.168.0.50
- 192.168.0.101
- 192.168.0.102
- 192.168.0.103

## Add public keys to RPi devices

Run commands as specified

- `ssh-copy-id pi@192.168.0.50`
- `ssh-copy-id pi@192.168.0.101`
- `ssh-copy-id pi@192.168.0.102`
- `ssh-copy-id pi@192.168.0.103`

## RPi Provisioning

Provisioning was tested on ansible 2.8.3. For running automated provisioning:

`ansible-playbook -i inventory/inventory.ini provisioning.yml`

## Add DNS as your naming server

- Add line: `nameserver 192.168.0.50` to a file: /etc/resolvconf/resolv.conf.d/head
- Restart resolvconf service: `sudo service resolvconf restart`

## Check your installation

### Check DNS

- ping google.com
- ping dns.k8s.cluster.com
- ping master1.k8s.cluster

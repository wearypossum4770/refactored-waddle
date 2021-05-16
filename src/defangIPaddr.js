export default function defangIPaddr(address) {
  return address.replaceAll(".", "[.]");
}

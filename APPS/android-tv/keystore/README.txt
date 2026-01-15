Release keystore

This folder should contain pkmenus.jks used for release builds.
Generate it with:

keytool -genkeypair -v \
  -keystore pkmenus.jks \
  -alias pkmenus \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -storepass 'rvyAtwfYwvWKD5VnQskTbBfq' \
  -keypass 'rvyAtwfYwvWKD5VnQskTbBfq' \
  -dname 'CN=pkmenus, OU=menu, O=pouark, L=NA, S=NA, C=FR'

Keep pkmenus.jks private.

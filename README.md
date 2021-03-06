# cname-credstash

Module to expose endpoints for getting and creating secrets with credstash.

## Usage


### POST 

```
POST /mappings/ HTTP/1.1
Host: localhost:7000
Content-Type: application/json
Cache-Control: no-cache

{
  "cname": "login.authr.io",
  "backend": "justinhinerman.auth0.com",
  "cert": "-----BEGIN CERTIFICATE-----\nMIID+jCCAuKgAwIBAgIJAMiAmANX4uXLMA0GCSqGSIb3DQEBCwUAMFsxCzAJBgNV\nBAYTAlVTMQswCQYDVQQIEwJXVjETMBEGA1UEBxMKTW9yZ2FudG93bjERMA8GA1UE\nChMIQWNtZSBJbmMxFzAVBgNVBAMTDmxvZ2luLmF1dGhyLmlvMB4XDTE2MTAwNjE2\nMDgxMVoXDTE5MDcyNzE2MDgxMVowWzELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldW\nMRMwEQYDVQQHEwpNb3JnYW50b3duMREwDwYDVQQKEwhBY21lIEluYzEXMBUGA1UE\nAxMObG9naW4uYXV0aHIuaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQDTmqaN7nEdwEBB0xLE9MPxybuRxUFhAdW0RR2oyWm925ATW3cbSTt+zEh2Hd5m\nS2ZDL5QCF4264rTLjGI+MCDyUd/c+Gg6Ke60LgfuZrr4TXLXFQ9PbbdHGGFUZo/E\nBBbz/RM3MdJjwa/xcKBY4zTLOaPjbIMp2BogIWrAmerBT5fLLtEgnddCP08JLNdg\nqsQaZWv3Jq065CWA9U4Jctn0FPewHhcQl8KZ2nVKeBmgblSwISbGtT8Zva5mcP+3\nOmwgALjV6E2VrFOgPBlEHwQTpdd1PC+Ln4CpD5i/5eU5+smNopudpq7eMoHKGmiJ\n9txgAudgmo7sHnOenqZmHdW1AgMBAAGjgcAwgb0wHQYDVR0OBBYEFFtPU3J5lc2P\nsLCYNfHgFYt9U4xcMIGNBgNVHSMEgYUwgYKAFFtPU3J5lc2PsLCYNfHgFYt9U4xc\noV+kXTBbMQswCQYDVQQGEwJVUzELMAkGA1UECBMCV1YxEzARBgNVBAcTCk1vcmdh\nbnRvd24xETAPBgNVBAoTCEFjbWUgSW5jMRcwFQYDVQQDEw5sb2dpbi5hdXRoci5p\nb4IJAMiAmANX4uXLMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBACLK\nuQFKIDXklN7H9vGZ4PIFiB0izVF2SIVpv3CxfFTzlepUkUMDFTJ2HjSzwSJ9nfc8\nbxhS/LBoN5s87bu1qcYWKzZUWZoS+mGzi5xJqSkNLEEHHzho4+NKUVK7vp4nOVej\nKFobIE3DMbtKK+8VdVjSNQVS2TkLHXDQRPoIoNPNdfEG+l1z4sfP+Pr0obdtq+bI\n6JbXb1JezotZXPT54v28VWRx6lXJ1nUHj9h/MiuJlhjlhlpuq86odeunQm4pJxj1\nTDyI9T2mjIv2WxUjXvXzqOSZSqRBbTyRiIE7e7xz9T2VN4nWReJxwhOZek60r5Jw\nB2MNfAbOwS5BuOYpYFM=\n-----END CERTIFICATE-----\n%",
  "key": "-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: DES-EDE3-CBC,23595C870908DFA2\ndG4+yLwADOgrQ+j5XTDNRQa3OFFwqDe2qzw53nM6NL+5vGzLJmAeweDpiNkm8uPK\nosI0t+MOuZeF0r5pq1tFECErqKcYFTNVJNA6bWRp4o3jnrlOYAo38xVL0a6wzigz\nGqZvqcBpEO9KvgBRmIrFfk+vU8xqoOi3kwncEejwkiVu8XIsOUtu0g1SOwfITooA\n2M3drAqZt8So6Q0fhWrYwVZnx9Gi3ejbcoQzrcLg0eqXGLqynW66VztHzVxc9yn1\n31lglI6asPWi4EoIamX3k8uHerRRq2tk+bVjHUWk2WAViJqVysi3ANHRnErMjXW9\nesH8VN1psuHc4K3r+X7R55s0Q4equ3Zg7R/I7KrrOG1hRRpP9AM76jKPlkoMuQBz\nTOuIGereLAS2jt46qEF5zOFdr3KdKajs6hzTCGDYACuYHrg4LrK2PBnzTcNfQEXR\n6NLiN1aLm5XXak5rsJSIIZjOM313C1aBzyqMtqS/N4o6JHIW0sIf2aOy7XoBpO5p\nhz6ira39C7xS5Y19IC3sabdaE4Q3DqOkqm0ClkXVlTZay6MG80cOAqLDiuCtVOJz\nYwwaUxQ974tQue54KRzMuHsRp/QyGj6A0Z3nhT2Y1QtG3rqimocbDieDiURAcYI8\nUg32tLIRBOmFI/tCMOHKVYJkVyijQgOaVB+9yVK/xIGcwiDA/7gHq4BZgkPeklMu\nDNrtcj+WrPxyH1UlKgV89zE/dbnKV1tb6BVNv2MR+ck3vPuRGXizd3td4/1JLVYP\ncvKbQZ5LZJIA7UZkcKYlpmaaDUBR7Y7WkCZ8xbQKGPRTBPAT0N5Ieyv4g7kpB+hf\nPROoEA5kk751mW/njArQfTOIOWwHCMr4dgTmhZhHlZKI1iiIUZZRHkxVJKkri1Sc\nq6qhF92G69+u+nwiRd8h8YJ9q0D2QrKW/HYW8aBKkmqQ2loBGqiCg8T4GwtmyJnf\n3jsRBxRDyb1GXvipzb1bPXqXPJsAL7OHl+bOmKcKAAItdotBvwIveBhe+A2bMqa0\nMulT1OUxKykKGOnehKm5xGDYfH857slKIs/v4zcIwfZrKrpjKLTWDpJBiytwaTxp\nuWst0/hfHVXls1XsbyakOwdVKMSzmmZDtVjDRXlSAZzizjSnDBOd3QpuZSZfZmyl\nWOaSEfZvrovEzfA10XONZELTnxpX48ZCTab5RLDNnUxFt01YIpGh4MHdQXREI5sx\ncaEq/256pRqD7m4Aa75ZS4s1DaoseXAWTKQxOS+UqoZlwrRy6xrgflwONQaMGUYx\nxFuACyed5Qt0doyCnq9cD5TDnCOViJqw7B5FB5sfO/1Uks/2N2JW1terkFVxyKmq\nlFItrXrwfTh7A5dfJ7VgKeMrMSeTruR447h3CkjeeBnTbYG1ymH0IOjBId6Vba+q\ns38z0SVbdBJF8VNXxOUQ4aOINzotMEcv2hApDMW6WH9Co/TCyH9xgWfAw6W1TrKq\ndP8JkfFSGK3wKcpvACQp72zj3JOoY2be1LiD//1Ij016+GZe6F11PzC542N5EAJW\nbiWAaWhm0F6f3v38/kmFnK5IjZYNCbi2sWsRTZJHG1yP9uHKiBRTww==\n-----END RSA PRIVATE KEY-----\n%" 
}
```

for example might return: 

```
{
  "statusCode": 201,
  "body": {
    "cname": "login.authr.io",
    "backend": "justinhinerman.auth0.com",
    "cert": "-----BEGIN CERTIFICATE-----\nMIID+jCCAuKgAwIBAgIJAMiAmANX4uXLMA0GCSqGSIb3DQEBCwUAMFsxCzAJBgNV\nBAYTAlVTMQswCQYDVQQIEwJXVjETMBEGA1UEBxMKTW9yZ2FudG93bjERMA8GA1UE\nChMIQWNtZSBJbmMxFzAVBgNVBAMTDmxvZ2luLmF1dGhyLmlvMB4XDTE2MTAwNjE2\nMDgxMVoXDTE5MDcyNzE2MDgxMVowWzELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldW\nMRMwEQYDVQQHEwpNb3JnYW50b3duMREwDwYDVQQKEwhBY21lIEluYzEXMBUGA1UE\nAxMObG9naW4uYXV0aHIuaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQDTmqaN7nEdwEBB0xLE9MPxybuRxUFhAdW0RR2oyWm925ATW3cbSTt+zEh2Hd5m\nS2ZDL5QCF4264rTLjGI+MCDyUd/c+Gg6Ke60LgfuZrr4TXLXFQ9PbbdHGGFUZo/E\nBBbz/RM3MdJjwa/xcKBY4zTLOaPjbIMp2BogIWrAmerBT5fLLtEgnddCP08JLNdg\nqsQaZWv3Jq065CWA9U4Jctn0FPewHhcQl8KZ2nVKeBmgblSwISbGtT8Zva5mcP+3\nOmwgALjV6E2VrFOgPBlEHwQTpdd1PC+Ln4CpD5i/5eU5+smNopudpq7eMoHKGmiJ\n9txgAudgmo7sHnOenqZmHdW1AgMBAAGjgcAwgb0wHQYDVR0OBBYEFFtPU3J5lc2P\nsLCYNfHgFYt9U4xcMIGNBgNVHSMEgYUwgYKAFFtPU3J5lc2PsLCYNfHgFYt9U4xc\noV+kXTBbMQswCQYDVQQGEwJVUzELMAkGA1UECBMCV1YxEzARBgNVBAcTCk1vcmdh\nbnRvd24xETAPBgNVBAoTCEFjbWUgSW5jMRcwFQYDVQQDEw5sb2dpbi5hdXRoci5p\nb4IJAMiAmANX4uXLMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBACLK\nuQFKIDXklN7H9vGZ4PIFiB0izVF2SIVpv3CxfFTzlepUkUMDFTJ2HjSzwSJ9nfc8\nbxhS/LBoN5s87bu1qcYWKzZUWZoS+mGzi5xJqSkNLEEHHzho4+NKUVK7vp4nOVej\nKFobIE3DMbtKK+8VdVjSNQVS2TkLHXDQRPoIoNPNdfEG+l1z4sfP+Pr0obdtq+bI\n6JbXb1JezotZXPT54v28VWRx6lXJ1nUHj9h/MiuJlhjlhlpuq86odeunQm4pJxj1\nTDyI9T2mjIv2WxUjXvXzqOSZSqRBbTyRiIE7e7xz9T2VN4nWReJxwhOZek60r5Jw\nB2MNfAbOwS5BuOYpYFM=\n-----END CERTIFICATE-----\n%",
    "key": "-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: DES-EDE3-CBC,23595C870908DFA2\ndG4+yLwADOgrQ+j5XTDNRQa3OFFwqDe2qzw53nM6NL+5vGzLJmAeweDpiNkm8uPK\nosI0t+MOuZeF0r5pq1tFECErqKcYFTNVJNA6bWRp4o3jnrlOYAo38xVL0a6wzigz\nGqZvqcBpEO9KvgBRmIrFfk+vU8xqoOi3kwncEejwkiVu8XIsOUtu0g1SOwfITooA\n2M3drAqZt8So6Q0fhWrYwVZnx9Gi3ejbcoQzrcLg0eqXGLqynW66VztHzVxc9yn1\n31lglI6asPWi4EoIamX3k8uHerRRq2tk+bVjHUWk2WAViJqVysi3ANHRnErMjXW9\nesH8VN1psuHc4K3r+X7R55s0Q4equ3Zg7R/I7KrrOG1hRRpP9AM76jKPlkoMuQBz\nTOuIGereLAS2jt46qEF5zOFdr3KdKajs6hzTCGDYACuYHrg4LrK2PBnzTcNfQEXR\n6NLiN1aLm5XXak5rsJSIIZjOM313C1aBzyqMtqS/N4o6JHIW0sIf2aOy7XoBpO5p\nhz6ira39C7xS5Y19IC3sabdaE4Q3DqOkqm0ClkXVlTZay6MG80cOAqLDiuCtVOJz\nYwwaUxQ974tQue54KRzMuHsRp/QyGj6A0Z3nhT2Y1QtG3rqimocbDieDiURAcYI8\nUg32tLIRBOmFI/tCMOHKVYJkVyijQgOaVB+9yVK/xIGcwiDA/7gHq4BZgkPeklMu\nDNrtcj+WrPxyH1UlKgV89zE/dbnKV1tb6BVNv2MR+ck3vPuRGXizd3td4/1JLVYP\ncvKbQZ5LZJIA7UZkcKYlpmaaDUBR7Y7WkCZ8xbQKGPRTBPAT0N5Ieyv4g7kpB+hf\nPROoEA5kk751mW/njArQfTOIOWwHCMr4dgTmhZhHlZKI1iiIUZZRHkxVJKkri1Sc\nq6qhF92G69+u+nwiRd8h8YJ9q0D2QrKW/HYW8aBKkmqQ2loBGqiCg8T4GwtmyJnf\n3jsRBxRDyb1GXvipzb1bPXqXPJsAL7OHl+bOmKcKAAItdotBvwIveBhe+A2bMqa0\nMulT1OUxKykKGOnehKm5xGDYfH857slKIs/v4zcIwfZrKrpjKLTWDpJBiytwaTxp\nuWst0/hfHVXls1XsbyakOwdVKMSzmmZDtVjDRXlSAZzizjSnDBOd3QpuZSZfZmyl\nWOaSEfZvrovEzfA10XONZELTnxpX48ZCTab5RLDNnUxFt01YIpGh4MHdQXREI5sx\ncaEq/256pRqD7m4Aa75ZS4s1DaoseXAWTKQxOS+UqoZlwrRy6xrgflwONQaMGUYx\nxFuACyed5Qt0doyCnq9cD5TDnCOViJqw7B5FB5sfO/1Uks/2N2JW1terkFVxyKmq\nlFItrXrwfTh7A5dfJ7VgKeMrMSeTruR447h3CkjeeBnTbYG1ymH0IOjBId6Vba+q\ns38z0SVbdBJF8VNXxOUQ4aOINzotMEcv2hApDMW6WH9Co/TCyH9xgWfAw6W1TrKq\ndP8JkfFSGK3wKcpvACQp72zj3JOoY2be1LiD//1Ij016+GZe6F11PzC542N5EAJW\nbiWAaWhm0F6f3v38/kmFnK5IjZYNCbi2sWsRTZJHG1yP9uHKiBRTww==\n-----END RSA PRIVATE KEY-----\n%"
  }
}
```

### GET

```
GET /mappings/login.mdocs.com HTTP/1.1
Host: localhost:7000
```

might return

 ```
 {
  "statusCode": 200,
  "body": {
      "cname": "login.authr.io",
      "backend": "justinhinerman.auth0.com",
      "cert": "-----BEGIN CERTIFICATE-----\nMIID+jCCAuKgAwIBAgIJAMiAmANX4uXLMA0GCSqGSIb3DQEBCwUAMFsxCzAJBgNV\nBAYTAlVTMQswCQYDVQQIEwJXVjETMBEGA1UEBxMKTW9yZ2FudG93bjERMA8GA1UE\nChMIQWNtZSBJbmMxFzAVBgNVBAMTDmxvZ2luLmF1dGhyLmlvMB4XDTE2MTAwNjE2\nMDgxMVoXDTE5MDcyNzE2MDgxMVowWzELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldW\nMRMwEQYDVQQHEwpNb3JnYW50b3duMREwDwYDVQQKEwhBY21lIEluYzEXMBUGA1UE\nAxMObG9naW4uYXV0aHIuaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQDTmqaN7nEdwEBB0xLE9MPxybuRxUFhAdW0RR2oyWm925ATW3cbSTt+zEh2Hd5m\nS2ZDL5QCF4264rTLjGI+MCDyUd/c+Gg6Ke60LgfuZrr4TXLXFQ9PbbdHGGFUZo/E\nBBbz/RM3MdJjwa/xcKBY4zTLOaPjbIMp2BogIWrAmerBT5fLLtEgnddCP08JLNdg\nqsQaZWv3Jq065CWA9U4Jctn0FPewHhcQl8KZ2nVKeBmgblSwISbGtT8Zva5mcP+3\nOmwgALjV6E2VrFOgPBlEHwQTpdd1PC+Ln4CpD5i/5eU5+smNopudpq7eMoHKGmiJ\n9txgAudgmo7sHnOenqZmHdW1AgMBAAGjgcAwgb0wHQYDVR0OBBYEFFtPU3J5lc2P\nsLCYNfHgFYt9U4xcMIGNBgNVHSMEgYUwgYKAFFtPU3J5lc2PsLCYNfHgFYt9U4xc\noV+kXTBbMQswCQYDVQQGEwJVUzELMAkGA1UECBMCV1YxEzARBgNVBAcTCk1vcmdh\nbnRvd24xETAPBgNVBAoTCEFjbWUgSW5jMRcwFQYDVQQDEw5sb2dpbi5hdXRoci5p\nb4IJAMiAmANX4uXLMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBACLK\nuQFKIDXklN7H9vGZ4PIFiB0izVF2SIVpv3CxfFTzlepUkUMDFTJ2HjSzwSJ9nfc8\nbxhS/LBoN5s87bu1qcYWKzZUWZoS+mGzi5xJqSkNLEEHHzho4+NKUVK7vp4nOVej\nKFobIE3DMbtKK+8VdVjSNQVS2TkLHXDQRPoIoNPNdfEG+l1z4sfP+Pr0obdtq+bI\n6JbXb1JezotZXPT54v28VWRx6lXJ1nUHj9h/MiuJlhjlhlpuq86odeunQm4pJxj1\nTDyI9T2mjIv2WxUjXvXzqOSZSqRBbTyRiIE7e7xz9T2VN4nWReJxwhOZek60r5Jw\nB2MNfAbOwS5BuOYpYFM=\n-----END CERTIFICATE-----\n%",
      "key": "-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: DES-EDE3-CBC,23595C870908DFA2\ndG4+yLwADOgrQ+j5XTDNRQa3OFFwqDe2qzw53nM6NL+5vGzLJmAeweDpiNkm8uPK\nosI0t+MOuZeF0r5pq1tFECErqKcYFTNVJNA6bWRp4o3jnrlOYAo38xVL0a6wzigz\nGqZvqcBpEO9KvgBRmIrFfk+vU8xqoOi3kwncEejwkiVu8XIsOUtu0g1SOwfITooA\n2M3drAqZt8So6Q0fhWrYwVZnx9Gi3ejbcoQzrcLg0eqXGLqynW66VztHzVxc9yn1\n31lglI6asPWi4EoIamX3k8uHerRRq2tk+bVjHUWk2WAViJqVysi3ANHRnErMjXW9\nesH8VN1psuHc4K3r+X7R55s0Q4equ3Zg7R/I7KrrOG1hRRpP9AM76jKPlkoMuQBz\nTOuIGereLAS2jt46qEF5zOFdr3KdKajs6hzTCGDYACuYHrg4LrK2PBnzTcNfQEXR\n6NLiN1aLm5XXak5rsJSIIZjOM313C1aBzyqMtqS/N4o6JHIW0sIf2aOy7XoBpO5p\nhz6ira39C7xS5Y19IC3sabdaE4Q3DqOkqm0ClkXVlTZay6MG80cOAqLDiuCtVOJz\nYwwaUxQ974tQue54KRzMuHsRp/QyGj6A0Z3nhT2Y1QtG3rqimocbDieDiURAcYI8\nUg32tLIRBOmFI/tCMOHKVYJkVyijQgOaVB+9yVK/xIGcwiDA/7gHq4BZgkPeklMu\nDNrtcj+WrPxyH1UlKgV89zE/dbnKV1tb6BVNv2MR+ck3vPuRGXizd3td4/1JLVYP\ncvKbQZ5LZJIA7UZkcKYlpmaaDUBR7Y7WkCZ8xbQKGPRTBPAT0N5Ieyv4g7kpB+hf\nPROoEA5kk751mW/njArQfTOIOWwHCMr4dgTmhZhHlZKI1iiIUZZRHkxVJKkri1Sc\nq6qhF92G69+u+nwiRd8h8YJ9q0D2QrKW/HYW8aBKkmqQ2loBGqiCg8T4GwtmyJnf\n3jsRBxRDyb1GXvipzb1bPXqXPJsAL7OHl+bOmKcKAAItdotBvwIveBhe+A2bMqa0\nMulT1OUxKykKGOnehKm5xGDYfH857slKIs/v4zcIwfZrKrpjKLTWDpJBiytwaTxp\nuWst0/hfHVXls1XsbyakOwdVKMSzmmZDtVjDRXlSAZzizjSnDBOd3QpuZSZfZmyl\nWOaSEfZvrovEzfA10XONZELTnxpX48ZCTab5RLDNnUxFt01YIpGh4MHdQXREI5sx\ncaEq/256pRqD7m4Aa75ZS4s1DaoseXAWTKQxOS+UqoZlwrRy6xrgflwONQaMGUYx\nxFuACyed5Qt0doyCnq9cD5TDnCOViJqw7B5FB5sfO/1Uks/2N2JW1terkFVxyKmq\nlFItrXrwfTh7A5dfJ7VgKeMrMSeTruR447h3CkjeeBnTbYG1ymH0IOjBId6Vba+q\ns38z0SVbdBJF8VNXxOUQ4aOINzotMEcv2hApDMW6WH9Co/TCyH9xgWfAw6W1TrKq\ndP8JkfFSGK3wKcpvACQp72zj3JOoY2be1LiD//1Ij016+GZe6F11PzC542N5EAJW\nbiWAaWhm0F6f3v38/kmFnK5IjZYNCbi2sWsRTZJHG1yP9uHKiBRTww==\n-----END RSA PRIVATE KEY-----\n%" 
  }
}
```

or if there are problems

```
{
  "statusCode": 500,
  "body": {
    "message": "Missing region in config"
  }
}
```


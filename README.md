# Sunward 2.0 isolated preview

This branch is a deployment-only preview of the Sunward 2.0 website requested by Keilan. It must NOT be merged into the existing solar-template production branch.

The complete build source is packed into integrity-checked Brotli chunks for transfer. `node build.cjs` verifies and expands those files, then runs Sunward's original build scripts. No credentials, customer data, production API handlers or external lead endpoints are included. Preview pages remain noindex and enquiries remain non-sending.

The original `energy-concerns-microsite` branch is unchanged. Delete this preview branch when it is no longer needed.
